import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>

      <h1>click for add</h1>
      <button onClick={()=> setCount(count + 1)} >  + </button>
      <p>{count}</p>
     <h1>Click for subtract</h1>
      <button onClick={()=> setCount(count - 1)} > - </button>
      <p>{count}</p>
    
    </div>
  );
}

export default App;