//import { Link } from "react-router-dom";
//import Navbar from '../navbar/navbar';
import '../tour/Tour.css';

function Tour(props){

    return(
        <>
        
        <img src = {props.image}/>
        <p> {props.name} </p>
        </>
    );
}
export default Tour;