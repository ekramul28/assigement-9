import Banner from "../../Banner/Banner";
import Navbar from "../../Components/Header/Navbar";
import StartJourney from "../../Components/StartJourney/StartJourney";
import Welcome from "../../Components/Welcome/Welcome";
import Footer from "../../Footer/Footer";
import OurServices from "../../OurServices/OurServices";

const Home = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <OurServices></OurServices>
            <Welcome></Welcome>
            <StartJourney></StartJourney>
            <Footer></Footer>
        </div>
    );
};

export default Home;