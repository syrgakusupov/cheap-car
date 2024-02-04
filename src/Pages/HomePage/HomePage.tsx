import React from 'react';
import "../../Styles/Home.scss"
import Deals from "../../Components/Home/Deals";
import Block_2 from "../../Components/Home/Offers";
import Block_3 from "../../Components/Home/Application";
import Block_4 from "../../Components/Home/Install";

const HomePage = () => {
    return (
        <div className="Home">
            <Deals/>
            <Block_2/>
            <Block_3/>
            <Block_4/>
        </div>
    );
};

export default HomePage;