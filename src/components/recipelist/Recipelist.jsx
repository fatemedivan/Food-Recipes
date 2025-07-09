import React from 'react'
import './Recipelist.css'
import { Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'

export default function Recipelist({recipes}) {

  const {mode} = useTheme()
  
  return (
    <div className='recipe-list'>
        {recipes.map((recipe)=>(
            <div className={`card ${mode}`} key={recipe.id}>
                <h3>{recipe.title}</h3>
                <p>{recipe.cookingtime} minutes to make</p>
                <div>{recipe.method.substring(0,100)}...</div>
                <Link to={`/recipe/${recipe.id}`}>cook this</Link>
            </div>
        ))}
    </div>
  )
}
