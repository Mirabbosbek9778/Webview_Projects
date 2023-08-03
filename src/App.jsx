import { useState } from 'react';
import Main from './components/Main';
import Test from './Test';
import './App.css';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Main />*/}

      <Test />
    </>
  );
}

export default App;
