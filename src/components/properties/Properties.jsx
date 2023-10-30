import PropertyItem from "./PropertyItem.jsx";
import './Properties.css';
import houseImage1 from '../../assets/pictures/amsterdamHouse1.jpeg';
import houseImage2 from '../../assets/pictures/amsterdamHouse2.jpg';


function Properties() {


    return (
        <div className="cards">
            <h1>view our properties</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <PropertyItem
                        src={houseImage1}
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus"
                        label="€190.000"
                        path="/propertydetails"
                        />
                        <PropertyItem
                            src={houseImage2}
                            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus"
                            label="€250.000"
                            path="/propertydetails"
                        />
                        <PropertyItem
                            src={houseImage1}
                            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus"
                            label="€190.000"
                            path="/propertydetails"
                        />
                        <PropertyItem
                            src={houseImage2}
                            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus"
                            label="€250.000"
                            path="/propertydetails"
                        />
                    </ul>
                    <ul className="cards__items">
                        <PropertyItem
                            src={houseImage1}
                            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus"
                            label="€190.000"
                            path="/propertydetails"
                        />
                        <PropertyItem
                            src={houseImage2}
                            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus"
                            label="€250.000"
                            path="/propertydetails"
                        />
                        <PropertyItem
                            src={houseImage1}
                            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus"
                            label="€190.000"
                            path="/propertydetails"
                        />
                        <PropertyItem
                            src={houseImage2}
                            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus"
                            label="€250.000"
                            path="/propertydetails"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Properties;