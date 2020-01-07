import React from  "react";
import ReactDOM from "react-dom";
import {HashRouter, Route} from 'hash-router';

import Dashboard from "./components/Dashboard";
import DashPortfolio from "./components/DashPortfolio";
import DashOffer from "./components/DashOffer";
import DashContact from "./components/DashContact";
import DashMycv from "./components/DashMycv";
import DashTechtalks from "./components/DashTechtalks";
import DashBlog from "./components/DashBlog";


ReactDOM.render(

<HashRouter>

    <Route exact path="/" component={Dashboard}/>
    <Route exact path="/portfolio" component={DashPortfolio}/>
    <Route exact path="/myoffer" component={DashOffer}/>
    <Route exact path="/mycontact" component={DashContact}/>
    <Route exact path="/mycv" component={DashMycv}/>
    <Route exact path="/mytechtalks" component={DashTechtalks}/>
    <Route exact path="/myblog" component={DashBlog}/>

</HashRouter>,
document.getElementById("root"));