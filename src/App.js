import { Route, Routes } from 'react-router-dom';
import './App.css';
import Plan from './componest/Plant';
import EatWell from "./componest/EatWell";
import Navbar from './componest/Navbar';
import Recipe from './componest/Recipe';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/eat" element={<EatWell/>}/>
      <Route path="/" element={<Plan />} />
      <Route path="/recipe/:foodId" element={<Recipe/>} />
      
    </Routes>
    {/* <Plan/> */}
    </>
    );
}

export default App;
