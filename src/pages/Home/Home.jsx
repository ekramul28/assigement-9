import Banner from "../../Banner/Banner";
import StartJourney from "../../Components/StartJourney/StartJourney";
import Welcome from "../../Components/Welcome/Welcome";
import OurServices from "../../OurServices/OurServices";

const Home = () => {
    return (
        <div className="container mx-auto">

            <Banner></Banner>

            <Welcome></Welcome>


            <OurServices></OurServices>
            <StartJourney></StartJourney>

        </div>
    );
};

export default Home;