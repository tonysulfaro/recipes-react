import React, { useState } from 'react'
import './App.css'
import './Search'
import './SearchResults'
import Search from './Search'
import Results from './SearchResults'

function App() {

  const [results, setResults] = useState([])

  return (
    <main>
      <div className="bg"></div>
        <h1>Recipe Finder</h1>
        <Search setResults={setResults}></Search>
        <Results recipes={results}></Results>
    </main>
  )
}

export default App
