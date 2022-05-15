import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import Tour from './components/tours/Tours';
import TourDetails from './components/tourdetails/tourdetails';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
   {/* <Home/> */}
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/city/:id" element={<TourDetails />} />
   </Routes>
    </>
  );
}

export default App;
