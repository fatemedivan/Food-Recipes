import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Searchbar.css'

export default function Searchbar() {

    const [term ,setTerm] = useState('')
    const navigate = useNavigate()

    const handlesubmit = (e) =>{
        e.preventDefault()
        navigate(`/search?title=${term}`)
        setTerm('')
    }
  return (
    <div className='searchbar'>
      <form onSubmit={handlesubmit}>
        <label>
            <span>Search : </span>
            <input type="text" onChange={e => setTerm(e.target.value)} value={term}/>
        </label>
      </form>
    </div>
  )
}
