import React from 'react'
import "./ReceipeTile.css"
function ReceipeTile({recipe}) {
  return (
    <div className="ReceipeTile">
        <img className='recipeTile__img' src={recipe["recipe"]["image"]}/>
        <p className='recipeTile__name' >{recipe["recipe"]["label"]}</p>
        <button href="#" className='recipeTile__buy'>buy</button>
    </div>
    
  )
}

export default ReceipeTile