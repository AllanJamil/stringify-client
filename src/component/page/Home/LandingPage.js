import React from 'react';
import HeroSection from "./HeroSection";
import {homeObjOne, homeObjThree, homeObjTwo} from "./Data";

const LandingPage = () => {
    return (
        <div>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjTwo} />
            <HeroSection {...homeObjThree} />
        </div>
    );
};

export default LandingPage;
