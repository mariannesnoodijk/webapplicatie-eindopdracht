import './App.css';
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import Homepage from "./pages/homepage/Homepage.jsx";
import {Route, Routes} from "react-router-dom";

function App() {

    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/listings" element={<Listings/>}/>
                {/*<Route path="/products" element={<Products/>}/>*/}
                {/*<Route path="/sign-up" element={<SignUp/>}/>*/}
            </Routes>
            <Footer/>
        </>
    )
}

export default App;
