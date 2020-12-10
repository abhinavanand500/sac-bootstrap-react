import React from 'react';
import Donate from '../components/Donate';
import ClothesImage from '../img/clothes.svg';

const DonateClothes = () => (
    <div>
        <Donate type="Gender" option1="Male" option2="Female" img={ClothesImage} />
    </div>
);
export default DonateClothes;
