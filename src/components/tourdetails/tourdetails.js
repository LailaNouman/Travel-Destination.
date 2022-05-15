import { useParams } from "react-router-dom";
//import Tour from "../tours/tour/Tour"; 

const visited = require('../../data/db.json');

function TourDetails(props){
    const [isClick,setIsClick] = useState(false);
    function handleClick(){
        setIsClick(!isClick);
    }
    const { id } = useParams();
    let result = visited.filter(city => city.id === id)
    return(
        <>
        <div key = {result[0].id} >
        <img src = {result[0].image} />
        <p> Name: {result[0].name} </p>
        <p> Information: {result[0].info} </p>
        <button onClick={handleClick}> (isClick ? "see more" : "see less") </button>
        </div>
        </>
    );
}
export default TourDetails;