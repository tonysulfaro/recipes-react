import React from 'react'

function RecipeCard ({recipe}) {

    console.log(recipe)

    return (
        <a href={recipe.url} target="__blank" rel="noopener">
            <div className="recipe-card">
                <h2>{recipe.label}</h2>
                <p>Source: {recipe.source}</p>
                <p><img src={recipe.image} alt="recipe image"/></p>
            </div>
        </a>
    )
}

export default RecipeCard