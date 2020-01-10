import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import Dashboard from "./Dashboard";
// import DashPortfolio from "./DashPortfolio";
// import DashOffer from "./DashOffer";
// import DashContact from "./DashContact";
// import DashMycv from "./DashMycv";
// import DashTechtalks from "./DashTechtalks";
// import DashBlog from "./DashBlog";
import "./Style.css";





function App() {
  return (
    <div className="container">

        <BrowserRouter>

        <Route exact path="/" component={Dashboard}/>
        {/* <Route exact path="/portfolio" component={DashPortfolio}/>
        <Route exact path="/myoffer" component={DashOffer}/>
        <Route exact path="/mycontact" component={DashContact}/>
        <Route exact path="/mycv" component={DashMycv}/>
        <Route exact path="/mytechtalks" component={DashTechtalks}/>
        <Route exact path="/myblog" component={DashBlog}/> */}

        </BrowserRouter>,
     
    </div>
  );
}

export default App;
