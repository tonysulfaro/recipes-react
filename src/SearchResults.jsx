import React from 'react'
import RecipeCard from './RecipeCard'

function Results ({recipes}){
    console.log(recipes)

    return (
        <div className="recipe-card-container">
            {!recipes.length ? (
                <h1>No Recipes Found</h1>
            ) : (
                recipes.map(recipe => {
                return (
                    <RecipeCard key={recipe} recipe = {recipe.recipe} />
                );
                })
            )}
        </div>
    )
}

export default Results