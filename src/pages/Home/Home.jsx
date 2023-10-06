import Banner from "../../Banner/Banner";
import Navbar from "../../Components/Header/Navbar";
import Welcome from "../../Components/Welcome/Welcome";
import Footer from "../../Footer/Footer";

const Home = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <Welcome></Welcome>
            <Footer></Footer>
        </div>
    );
};

export default Home;