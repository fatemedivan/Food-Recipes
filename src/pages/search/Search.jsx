import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Recipelist from '../../../components/recipelist/Recipelist'

export default function Search() {
  
  const querystring = useLocation().search
  const queryparams = new URLSearchParams(querystring)
  const query = queryparams.get('q')

   const[data , setData] = useState([])
  
      useEffect(()=>{
          const fetchdata = async ()=>{
              const res = await fetch(`http://localhost:3002/recipes?q=${query}`)
              const data = await res.json()
              setData(data)
          }
          fetchdata()
      },[])

  return (
    <div>
      {data && <Recipelist recipes={data}/>}
    </div>
  )
}
