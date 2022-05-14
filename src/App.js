import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import Tour from './components/tour/Tour';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
   {/* <Home/> */}
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/tour" element={<Tour />} />
   </Routes>
    </>
  );
}

export default App;
