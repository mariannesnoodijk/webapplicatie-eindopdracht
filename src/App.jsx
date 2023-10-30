import './App.css';
import Navbar from "./components/navbar/Navbar.jsx";
import Homepage from "./pages/homepage/Homepage.jsx";
import Login from "./pages/login/Loginpage.jsx";
import Appointmentpage from "./pages/appointments/AppointmentPage.jsx";
import {Route, Routes} from "react-router-dom";
import Properties from "./components/properties/Properties.jsx";
import Account from "./pages/registerAccount/Account.jsx";
import ContactUs from "./pages/contact/ContactUs.jsx";
import PropertyDetailPage from "./components/properties/PropertyDetailPage.jsx";

function App() {

    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/properties" element={<Properties/>}/>
                <Route path="/register" element={<Account/>}/>
                <Route path='/appointments' element={<Appointmentpage/>}/>
                <Route path='/contact' element={<ContactUs/>}/>
                <Route path='/propertydetails' element={<PropertyDetailPage/>}/>
                {/*<Route path="/products" element={<Products/>}/>*/}
                {/*<Route path="/sign-up" element={<SignUp/>}/>*/}
            </Routes>
        </>
    )
}

export default App;
