import React from 'react'

function RecipeCard ({recipe}) {

    console.log(recipe)

    return (
        <a href={recipe.url} target="__blank" rel="noopener">
            <div class="card">
            <div class="card-gradient">
              <div class="card-content">
                <h2>{recipe.label}</h2>
                <p>Source: {recipe.source}</p>
                <p>Total Time: {recipe.totalTime}</p>
              </div>
            </div>
            <img src={recipe.image} alt="recipe" />
          </div>
        </a>
    )
}

export default RecipeCard