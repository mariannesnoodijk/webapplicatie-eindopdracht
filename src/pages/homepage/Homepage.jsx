import './Homepage.css';
import HeroSection from "../../components/herosection/HeroSection.jsx";
import Properties from "../../components/properties/Properties.jsx";
import Footer from "../../components/footer/Footer.jsx";

function Homepage() {
    return (
        <>
            <HeroSection/>
            <Properties/>
            <Footer/>
        </>
    );
}

export default Homepage;