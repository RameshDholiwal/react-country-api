import React from 'react'

export default function FilterDropdown({setFilter, region} 
  : {setFilter:  React.Dispatch<React.SetStateAction<string>>, region: string[] | null}) {
  return (
    <>
      <select className='form-control' onChange={(e) => setFilter(e.target.value.toLowerCase())}>
        <option value="">Select Region</option>
        {
          region && region.map((item) => {
            return <option key={item} value={item}>{item}</option>
          })
        }
      </select>
    </>
  )
}
