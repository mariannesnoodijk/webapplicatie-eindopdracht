import './Homepage.css';
import HeroSection from "../../components/herosection/HeroSection.jsx";
import Listings from "../../components/listings/Listings.jsx";

function Homepage() {
    return (
        <>
            <HeroSection/>
            <Listings/>
        </>
    );
}

export default Homepage;