import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";


const Card = () => {
    return(
        <div>


          
            <div className="ui fluid container" style ={ { backgroundImage: "url('./card5.jpg')" } }>
              
                <h1 className="cardhead">Hi, I'm Zaid</h1>
                <p className="cardpara">I m freelance web developer specialized in front-end and also back-end and a web development.</p>
                <p className="cardpara1">Get in touch</p>
                <i className="yellow big mail icon i1"></i>
                <i className="green big linkedin icon i2"></i>
                <i className="yellow big github icon i3"></i>
                <i className="green big facebook icon i4"></i>
                <i className="yellow big twitter icon i5"></i>
                <Link to="/portfolio"><button className="ui big green basic button cardbtn1">PORTFOLIO</button><Link>
                <Link to="/myoffer"><button className="ui big yellow basic button cardbtn2">MY OFFER</button></Link>


           

            </div>


        </div>
    );
}

export default Card;