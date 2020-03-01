import React, { useState } from 'react'

function Search ({setResults}){

    const [query, setQuery] = useState("")

    async function requestRecipes(){
        var url = 'https://api.edamam.com/search?q=' + query + '&app_id=d63abbc7&app_key=ad82d4418f075d5a656da60a47ad8246&from=0&to=12'
        const response = await fetch(url)
        const json = await response.json()
        console.log(json.hits)
        setResults(json.hits)
    }

    return (
        <div className="search-items">
            <form
                onSubmit = {e => {
                    e.preventDefault()
                    requestRecipes()
                }}
            >
                <p>Recipe to search for:</p>
                <input 
                type="text"
                id="query"
                value={query}
                onChange={e => setQuery(e.target.value)}
                />

                <input type="submit"/>
            </form>
        </div>
    )
}

export default Search