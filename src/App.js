import React from "react";
import Navbar from "./features/components/Navbar";
import About from "./features/About/About";
import Home from "./features/Home/Home";
import Contact from "./features/Contact/Contact";
import Footer from "./features/components/Footer";
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
                    {/* <Route path='/service' exact component={Service} /> */}
                    <Route path='/contact' exact component={Contact} />
                    {/* <Redirect to='/' /> */}
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
