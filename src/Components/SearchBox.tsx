import React, { useEffect, useState } from 'react'

export default function SearchBox({setQuery} : {setQuery: React.Dispatch<React.SetStateAction<string>>}) {
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    const searchTimeout = setTimeout(() => {
        setQuery(searchValue)
    }, 1000)

    return () => { clearTimeout(searchTimeout) }
  }, [searchValue])

  return (
    <>
      <input type="text" className='form-control' autoComplete='off' onChange={(e) => setSearchValue(e.target.value.toLowerCase())} />
    </>
  )
}
