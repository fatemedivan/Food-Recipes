import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Recipe.css'

export default function Recipe() {

  const { id } = useParams();
  const[data , setData] = useState([])

  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch(`http://localhost:3002/recipes/${id}`)
      const data = await res.json()
      setData(data)
    }
   
    fetchdata()
  }, [])
  
  return (
    <div className="recipe">
      {data &&  
          <>
            <h2 className="page-title">{data.title}</h2>
            <p>takes {data.cookingtime} minutes to cook</p>
            <ul>
               {data.ingredients?.map(ing => <li key={ing}>{ing}</li>)} 
            </ul>
            <p className="method">{data.method}</p>
          </>
        }
       
    </div>
  )
}
