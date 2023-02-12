import { useState } from "react"

function App() {
  const [result, setResult] = useState("");

  const createUser = async () => {
    
      const response = await fetch('/api/createUser', {
        method: 'POST',
      })
      const json = await response.json()
      

      if (!response.ok) {
       console.log(json.error)
      }
      if (response.ok) {

        setResult(json)
        
        }
}

  return (
    <div className="App">
    <button onClick={createUser}>Create API User</button>
    {result && <p>{JSON.stringify(result)}</p>}
    </div>
  );
}

export default App;
