import React from "react";
import logo from "./logo.svg";
import Navbar from "./features/components/Navbar";
import Home from "./features/Home/Home";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    {/* <Route path='/about' exact component={About} />
                <Route path='/service' exact component={Service} />
                <Route path='/contact' exact component={Contact} /> */}
                    {/* <Redirect to='/' /> */}
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
