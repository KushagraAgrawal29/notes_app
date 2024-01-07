import { useState } from 'react'
import './App.css'
import { Header } from './components'

function App() {
  const [query,setQuery] = useState("");
  return (
    <>
      <div>
        <Header search={query} setQuery={setQuery}/>
      </div>
    </>
  )
}

export default App
