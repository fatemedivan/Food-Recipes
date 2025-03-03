import React, { useEffect, useState } from 'react'
import './Create.css'
import { useNavigate } from 'react-router-dom'
export default function Create() {

  const[title, setTitle] = useState('')
  const[method, setMethod] = useState('')
  const[cookingtime, setCookingTime] = useState('')
  const[newIngredient, setNewIngredient] = useState('')
  const[ingredients, setIngredients] = useState([])
  const navigate = useNavigate()

  const handleAdd = (e)=>{
    e.preventDefault()
    if (newIngredient && !ingredients.includes(newIngredient)) {
      setIngredients(prevIngredients => [...prevIngredients , newIngredient])
    }
    setNewIngredient('')
  }
  
  const handleSubmit = async (e)=>{
    e.preventDefault()

    const id = Math.floor(Math.random() *100).toString()

    try {
        const response = await fetch('http://localhost:3002/recipes', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify( {id ,title , ingredients , method , cookingtime })
      })
      
      if (!response.ok) {
        throw new Error('failed to submit')
      } else{
        navigate('/')
      }

    }catch (error) {
      console.log(error);
    }
     
  }

  
  return (
    <div className='create'>
      <h2 className='page-title'>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>

        <label>
            <span>Recipe Title :</span>
            <input type="text" onChange={ e => setTitle(e.target.value)} value={title} required/>
        </label>

        <label>
            <span>Recipe ingredients : </span>
            <div className='ingredients'>
              <input type="text" onChange={ e => setNewIngredient(e.target.value)} value={newIngredient}/>
              <button  onClick={handleAdd}>Add</button>
            </div>
        </label>
        <p>current ingredient : {ingredients.map( i => <em key={i}>{i}, </em>)}</p>
      
        <label>
          <span>Recipe Method : </span>
          <textarea onChange={e => setMethod(e.target.value)} value={method} required/>
        </label>

        <label>
          <span>Cooking Time(m) : </span>
          <input type="number" onChange={e => setCookingTime(e.target.value)} value={cookingtime} required/>
        </label>

        <button>Submit</button>

      </form>
    </div>
  )
}
