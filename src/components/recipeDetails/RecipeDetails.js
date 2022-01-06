import React from 'react'
import './RecipeDetails.css'

function RecipeDetails({ item }) {
  console.log('recipe', item);
  
  return (
    <div>
      <h1>Recipes</h1>
      <div className="item-card border mt-3">
        <img src={item.image} className="card-img-top" alt={item.name} style={{height:"500px", width:"700px"}} />
        <div className="card-body">
          <h3>{item.name}</h3>
          <p className="card-text">{item.details}</p>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetails