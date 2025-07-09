import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Recipe.css'
import { useTheme } from "../../context/ThemeContext";

export default function Recipe() {

  const { id } = useParams();
  const {mode} = useTheme()
  const[data , setData] = useState([])

  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch(`http://localhost:3000/recipes/${id}`)
      const data = await res.json()
      setData(data)
    }
   
    fetchdata()
  }, [])
  
  return (
    <div className={`recipe ${mode}`}>
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
