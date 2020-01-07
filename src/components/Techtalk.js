import React from "react";
import "./Style.css";

const Techtalk = () => {
    return(
        <div style={{ backgroundColor: "#f2f2f2"}}>

        
           
            
            {/* Page1 */}
            <div className="ui container">
                <div className="ui segment">
                    <br/><br/>
                    <h1>MY TECH TALKS</h1>
                    <h4>Here you can find all my recent presentation slides/videos.</h4>
                    <div className="ui divider"></div>
                    <div className="doubling stackable ui two column grid">
                        <div className="two wide column">
                            30 Sep 2019
                        </div>
                        <div className="fourteen wide column">
                            <h3>Hype Driven Development sucks? - or rather, how to do it well</h3>
                            <ul>
                                <li>Meet.js Summit 2019</li>
                            </ul>
                            <button className="ui red button"><i className="computer icon"></i> View Slides</button>
                        </div>
                    </div> <br/>
                </div>
            </div>


            {/* page2 */}
            <div className="ui container">
                <div className="ui segment">
                    <div className="doubling stackable ui two column grid">
                        <div className="two wide column">
                            10 Jun 2019
                        </div>
                        <div className="fourteen wide column">
                            <h3>Keep everything documented and public</h3>
                            <ul>
                                <li>Internal AppUnite meetup - June 2019</li>
                            </ul>
                            <button className="ui red button"><i className="computer icon"></i> View Slides</button>
                        </div>
                    </div> <br/>
                </div>
            </div>



               {/* page3 */}
               <div className="ui container">
                <div className="ui segment">
                    <div className="doubling stackable ui two column grid">
                        <div className="two wide column">
                            22 May 2019
                        </div>
                        <div className="fourteen wide column">
                            <h3>Make your components pure and dumb (and composable)</h3>
                            <ul>
                                <li>Internal AppUnite meetup - June 2019</li>
                            </ul>
                            <button className="ui red button"><i className="computer icon"></i> View Slides</button>
                        </div>
                    </div> <br/>
                </div>
            </div>


               {/* page4 */}
               <div className="ui container">
                <div className="ui segment">
                    <div className="doubling stackable ui two column grid">
                        <div className="two wide column">
                            07 Jun 2018
                        </div>
                        <div className="fourteen wide column">
                            <h3>How to handle asynchronous actions in Redux</h3>
                            <ul>
                                <li>React Poznań Meetup by meet.js - June 2018</li>
                            </ul>
                            <button className="ui red button"><i className="copy icon"></i> Read article</button> <br/><br/>
                            <button className="ui red button"><i className="computer icon"></i> View Slides</button>
                        </div>
                    </div> <br/>
                </div>
            </div>



               {/* page5 */}
               <div className="ui container">
                <div className="ui segment">
                    <div className="doubling stackable ui two column grid">
                        <div className="two wide column">
                            05 Jun 2018
                        </div>
                        <div className="fourteen wide column">
                            <h3>How to write good, composable and pure components in Angular 2+</h3>
                            <ul>
                                <li>ng-poznan #31 @ Poznań - June 2018</li>
                            </ul>
                            <button className="ui red button"><i className="copy icon"></i> Read article</button> <br/><br/>
                            <button className="ui red button"><i className="computer icon"></i> View Slides</button>
                        </div>
                    </div> <br/>
                </div>
            </div>




               {/* page6*/}
               <div className="ui container">
                <div className="ui segment">
                    <div className="doubling stackable ui two column grid">
                        <div className="two wide column">
                            17 Nov 2016
                        </div>
                        <div className="fourteen wide column">
                            <h3>Migration from angular1 to angular2</h3>
                            <ul>
                                <li>AngularJS Beers @ Barcelona - November 2016</li>
                            </ul>
                            <button className="ui red button"><i className="computer icon"></i> View Slides</button>
                        </div>
                    </div> <br/>
                </div>
            </div>


                {/* page7 */}
                <div className="ui container">
                <div className="ui segment">
                    <div className="doubling stackable ui two column grid">
                        <div className="two wide column">
                            23 Jul 2015
                        </div>
                        <div className="fourteen wide column">
                            <h3>Elixir for Ruby developers</h3>
                            <ul>
                                <li>Poznań Ruby User Group - July 2015</li>
                            </ul>
                            <button className="ui red button"><i className="computer icon"></i> View Slides</button>
                        </div>
                    </div> <br/>
                </div>
            </div>



                {/* page8*/}
                <div className="ui container">
                <div className="ui segment">
                    <div className="doubling stackable ui two column grid">
                        <div className="two wide column">
                            30 Jun 2015
                        </div>
                        <div className="fourteen wide column">
                            <h3>"Zacznij przygodę z programowaniem" [Begin your adventure with a programming] - discussion panel</h3>
                            <ul>
                                <li>AngularJS Beers @ Barcelona - November 2016</li>
                            </ul>
                            <button className="ui red button"><i className="video icon"></i> Watch Video</button>
                        </div>
                    </div> <br/>
                </div>
            </div>










        <br/><br/>



        </div>
    );
}

export default Techtalk;