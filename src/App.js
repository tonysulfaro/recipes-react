import React, { useState } from 'react'
import './App.css'
import Search from './Search'
import SearchResults from './SearchResults'

function App() {

  const [results, setResults] = useState([])

  return (
    <main>
      <div className="bg"></div>
        <h1>Recipe Finder</h1>
        <Search setResults={setResults}></Search>
        <SearchResults recipes={results}></SearchResults>
    </main>
  )
}

export default App
