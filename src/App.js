import React from "react";
import Navbar from "./features/components/Navbar";
import About from "./features/About";
import Home from "./features/Home";
import Contact from "./features/Contact";
import Profile from "./features/Profile";
import Notification from "./features/Notification";
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
                    <Route
                        path='/notification'
                        exact
                        component={Notification}
                    />
                    <Redirect to='/' />
                </Switch>
                {/* <Footer /> */}
            </BrowserRouter>
        </div>
    );
}

export default App;
