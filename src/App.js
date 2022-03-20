import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './component/Manubar/Menubar';
import AllProducts from './component/AllProducts/AllProducts';
import { useState } from 'react';


function App() {
  const [count, setCount] = useState(0)

  const Add = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <Menubar count={count}></Menubar>
      <AllProducts add={Add}></AllProducts>
    </div>
  );
}

export default App;
