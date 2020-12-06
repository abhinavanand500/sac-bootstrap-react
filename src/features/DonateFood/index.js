import React from "react";
import Donate from "../components/Donate";
import FoodImage from "../img/food.svg";
const DonateFood = () => {
    return (
        <div>
            <Donate
                type='Food Donation Form'
                option1='Uncooked Food'
                option2='Cooked Food'
                img={FoodImage}
            />
        </div>
    );
};

export default DonateFood;
