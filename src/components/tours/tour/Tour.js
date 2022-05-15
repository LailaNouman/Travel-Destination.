//import './tours.css';
import { Link } from "react-router-dom";

function Tour(props){

      return <>
       { props.data.map(data => {
         return (   
        <Link to = {'/city/${data.id}'} key = {data.id}>
         <div >
         <img src = {data.image}/>
        <p> {data.name} </p>
        </div>
        </Link>
        )
        })
    }
        </>
  
}
export default Tour;