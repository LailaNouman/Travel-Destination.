import Header from '../header/Header';
import Tour from '../tour/Tour';
import Footer from '../footer/Footer';
import Navbar from '../navbar/navbar';
import '../home/Home.css';

const visited = require('../../data/db.json');

function Home(props){

    return(
        <div>
        <Navbar/>
        <Header/>
        {
            visited.map(most => {
                return  (
                <Tour name = {most.name} image = {most.image}/>
            )})
        }
        <Footer/>
        </div>
    );
}
export default Home;