import React from "react";
import Navbar from "./features/components/Navbar";
import About from "./features/About";
import Home from "./features/Home";
import Contact from "./features/Contact";
import Profile from "./features/Profile";
import Feed from "./features/Feed";
import Notification from "./features/Notification";
import Dashboard from "./features/Dashboard";
import DonateFood from "./features/DonateFood";
import DonateClothes from "./features/DonateClothes";
import DonateOthers from "./features/DonateOthers";
import AcceptedOrder from "./features/AcceptedOrder";
// import Footer from "./features/components/Footer";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/about' exact component={About} />
                    <Route path='/profile' exact component={Profile} />
                    <Route path='/contact' exact component={Contact} />
                    <Route path='/feed' exact component={Feed} />
                    <Route
                        path='/acceptedOrder'
                        exact
                        component={AcceptedOrder}
                    />

                    <Route
                        path='/notification'
                        exact
                        component={Notification}
                    />
                    <Route path='/donateFood' exact component={DonateFood} />
                    <Route
                        path='/donateClothes'
                        exact
                        component={DonateClothes}
                    />
                    <Route
                        path='/donateOthers'
                        exact
                        component={DonateOthers}
                    />
                    <Route path='/dashboard' exact component={Dashboard} />
                    <Redirect to='/' />
                </Switch>
                {/* <Footer /> */}
            </BrowserRouter>
        </div>
    );
}

export default App;
