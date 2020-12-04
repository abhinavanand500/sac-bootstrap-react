import React from "react";
import "./HomeModule.css";
import { Helmet } from "react-helmet";
import Jumbotron from "../components/Jumbotron";
const TITLE = "SACATE || HOME";
const Home = () => {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <div className='container-fluid'>
                <Jumbotron />
            </div>
        </>
    );
};

export default Home;
