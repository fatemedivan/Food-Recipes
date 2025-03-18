import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Recipelist from '../../../components/recipelist/Recipelist'

export default function Search() {
  const location = useLocation()
  
  const queryparams = new URLSearchParams(location.search)
  const query = queryparams.get('title')


  const[data , setData] = useState([])
  
      useEffect(()=>{
          const fetchdata = async ()=>{
              const res = await fetch(`http://localhost:3002/recipes?title=${query}`)
              const data = await res.json()
              setData(data)
          }
          fetchdata()
      },[location.search])

  return (
    <div>
      {data && <Recipelist recipes={data}/>}
    </div>
  )
}
