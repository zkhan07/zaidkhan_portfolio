import React from "react";
import "./Style.css";


const Contact = () => {
    return(
        <div style={{ backgroundColor: "#f2f2f2"}}>

            
            
            <div className="ui container"> 
                <div className="ui segment">
                    <br/><br/>
                    <h1>CONTACT ME</h1>
                    <div className="ui divider"></div>
                    <h4>I am available for hire and open to any ideas of cooperation.</h4> <br/>


                    <table class="ui celled table">
                        <thead>
                            <tr>
                         
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td data-label="Name"><h3>E-mail:</h3></td>
                            <td data-label="Age"><h3><i className="mail icon"></i>khanzaid786786.kz@gmail.com</h3> </td>
                            </tr>
                            <tr>
                            <td data-label="Name"><h3>LinkedIn:</h3></td>
                            <td data-label="Age"> <h3><i className="linkedin icon"></i> khanzaid786786.kz@gmail.com</h3></td>
                            </tr>
                            <tr>
                            <td data-label="Name"><h3>Github:</h3></td>
                            <td data-label="Age"> <h3><i className="github icon"></i> khanzaid786786.kz@gmail.com</h3></td>
                            </tr>
                            <tr>
                            <td data-label="Name"><h3>Facebook:</h3></td>
                            <td data-label="Age">  <h3><i className="facebook icon"></i> Khan Zaid</h3></td>
                            </tr>
                            <tr>
                            <td data-label="Name"><h3>Twitter:</h3></td>
                            <td data-label="Age"><h3><i className="twitter icon"></i> khanzaid786786.kz@gmail.com</h3></td>
                            </tr>
                      
                        </tbody>
                    </table>

                    <br/><br/>
                    
                </div>
            </div>


            <br/><br/><br/><br/>   <br/><br/><br/><br/>   <br/>

        </div>
    );
}

export default Contact;