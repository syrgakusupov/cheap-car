import React from 'react';
import "../../Styles/Home.scss"
import Block_1 from "../../Components/Home/Block_1";
import Block_2 from "../../Components/Home/Block_2";
import Block_3 from "../../Components/Home/Block_3";
import Block_4 from "../../Components/Home/Block_4";

const HomePage = () => {
    return (
        <div className="Home">
            <Block_1/>
            <Block_2/>
            <Block_3/>
            <Block_4/>
        </div>
    );
};

export default HomePage;