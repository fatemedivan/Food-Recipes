import React from 'react'
import './Recipelist.css'
import { Link } from 'react-router-dom'

export default function Recipelist({recipes}) {

  
  return (
    <div className='recipe-list'>
        {recipes.map((recipe)=>(
            <div className='card' key={recipe.id}>
                <h3>{recipe.title}</h3>
                <p>{recipe.cookingtime} minutes to make</p>
                <div>{recipe.method.substring(0,100)}...</div>
                <Link to={`/recipe/${recipe.id}`}>cook this</Link>
            </div>
        ))}
    </div>
  )
}
