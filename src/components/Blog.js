import React from "react";
import "./Style.css";
import Tab from "./Tab";

const Techtalk = () => {
    return(
        <div style={{ backgroundColor: "#f2f2f2"}}>

           

            <div className="ui container">
                <div className="ui segment">
                    <br/><br/> <br/><br/>
                    <div className="doubling stackable ui two column grid">
                        <div className="column">
                            <h2>Zaid Khan <button className="ui basic white button">Follow</button></h2>
                            <p>Full-stack web developer (jtom.me) with over 15 years of experience. Currently looking for the next challenge. (Msg me, if you’re looking for a dev/tech lead.)</p> <br/>
                            <p>Medium member since December 2018</p>
                            <a>1215 following</a>  <br/>
                            <a>154 Followers</a> 
                            <i className="blue twitter icon"></i> <br/><br/>
                        </div>
                        <div className="column center aligned">
                            <div className="ui small circular image">
                                <img src="zaid.png" />
                            </div>
                        </div>
                    </div>

                   <br/><br/><br/><br/>

                    <div className="doubling stackable">
                        <Tab /> 
                    </div>
               
                </div>
            </div>

        </div>
    );
}

export default Techtalk;