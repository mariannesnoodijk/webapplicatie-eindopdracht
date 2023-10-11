import ListingItem from "./ListingItem.jsx";
import './Listings.css';
import houseImage1 from '../../assets/pictures/amsterdamHouse1.jpeg';
import houseImage2 from '../../assets/pictures/amsterdamHouse2.jpg';


function Listings() {
    return (
        <div className="cards">
            <h1>view our listings</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <ListingItem
                        src={houseImage1}
                        text="Explore the hidden waterfall deep inside the jungle"
                        label="€190.000"
                        path="/services"
                        />
                        <ListingItem
                            src={houseImage2}
                            text="Travel through the islands of Bali on a private cruise"
                            label="€250.000"
                            path="/services"
                        />
                        <ListingItem
                            src={houseImage1}
                            text="Explore the hidden waterfall deep inside the jungle"
                            label="€190.000"
                            path="/services"
                        />
                        <ListingItem
                            src={houseImage2}
                            text="Travel through the islands of Bali on a private cruise"
                            label="€250.000"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <ListingItem
                            src={houseImage1}
                            text="Explore the hidden waterfall deep inside the jungle"
                            label="€190.000"
                            path="/services"
                        />
                        <ListingItem
                            src={houseImage2}
                            text="Travel through the islands of Bali on a private cruise"
                            label="€250.000"
                            path="/services"
                        />
                        <ListingItem
                            src={houseImage1}
                            text="Explore the hidden waterfall deep inside the jungle"
                            label="€190.000"
                            path="/services"
                        />
                        <ListingItem
                            src={houseImage2}
                            text="Travel through the islands of Bali on a private cruise"
                            label="€250.000"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Listings;