import { useState, useEffect } from 'react';

function App() {
  const [name, setName] = useState("Guest!");
  useEffect(() => {
    console.log("User changed to",name);
  }, [name]);

  const nameChange = () => {
    setName("Alice");
  };

  return (
    <div>
      <p>Welcome {name}</p>
      <button onClick={nameChange}>Name changed</button>
    </div>
  );
}

export default App;