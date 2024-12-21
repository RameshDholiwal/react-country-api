import { FormEvent, useState } from 'react'

interface formFormat extends HTMLFormElement {
  Title: string
  Description: string
}
export default function About() {
  const [formData, setFormData] = useState({
    Title: "",
    Description: ""
  })
  const handleSubmit = (e: FormEvent<formFormat>) => {
    e.preventDefault();
    const allData = new FormData(e.currentTarget);
    const jsonData = Object.fromEntries(allData.entries());
    console.log(jsonData)
    
    setFormData({
      Title: jsonData["Title"].toString(),
      Description: jsonData["Description"].toString()
    })
  }
  return (
    <>
      <div className="row">
        <div className="col-sm-8 m-auto">
          <form className='form-horizontal row' onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="Title" className="form-label">Enter Title</label>
              <input type="text" className="form-control" name='Title' placeholder="Enter Title" autoComplete='off' />
            </div>
            <div className="mb-3">
              <label htmlFor="Description" className="form-label">Description</label>
              <textarea className="form-control" name='Description' rows={3} autoComplete='off'></textarea>
            </div>
            <div className='mb-3'>
              <button type='submit' className='btn btn-outline-primary'>Submit</button>
            </div>
          </form>
          <div>
              {
                formData && (
                  <>
                    <div className="row">
                      <div className="col"><b>Title:</b> {formData.Title}</div>
                    </div>
                    <div className="row">
                      <div className="col"><b>Description:</b> {formData.Description}</div>
                    </div>
                  </>
                )
              }
          </div>
        </div>
      </div>
    </>
  )
}
