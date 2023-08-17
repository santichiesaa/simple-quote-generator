import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [randomQuote, setRandomQuote] = useState("")
  const callAPI = () => {
      fetch("https://api.quotable.io/random")
    .then(response => response.json())
    .then(data => setRandomQuote(data.content))
  }

  useEffect(() =>{
  setRandomQuote("")
}, []);

return (
    <>
      <button onClick={callAPI}>Get a random quote!</button>
      <h1>{randomQuote}</h1>
    </>
  );
}

export default App
