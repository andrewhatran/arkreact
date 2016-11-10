'use strict';

import React from 'react';
import AthletePreview from './AthletePreview';
import athletes from '../data/athletes';

export default class IndexPage extends React.Component {
  render() {
    return (
    <div id="page-top" className="height-100 index">

        <div className="grid" id="grid-bg1"></div>
        <div className="grid" id="grid-bg2"></div>
        <div className="grid" id="grid-bg4"></div>



        <div id="index-desktop" className="grid bg-index">
            <div className="row row-vert-margin">
                <div className="col-xs-12"><div className="box-row"></div></div>
            </div>
            <div className="row row-body">
                 <div className="col-xs-1" >
                    <div className="box-row"></div>
                </div>


                <div className="col-xs-10 height-100">
                     <div className="row row-full">
                         <div className="col-xs-2 col-sm-3 height-100">
                             <div className="row row-a" id="a1">   
                                <a href="index.html">
                                     <div id="corner-container" className="col-xs-12"> <div className="box-row">
                                            <img className="f-left" id="corner-icon" src={"img/arklogobox.png"}/>
                                     </div></div>
                                </a>
                            </div>
                            <div className="row row-b" id="b1">
                                <div className="col-xs-12">
                                    <div className="box-row">
                                    </div>
                                </div>
                            </div>
                            <div className="row row-c" id="c1">
                                <div className="col-xs-12"><div className="box-row"></div></div>
                            </div>
                        </div>
                        <div className="col-xs-49 col-sm-49 height-100">
                            <div className="row row-full">
                                 <div className="col-xs-1 col-window-margin height-100" >
                                    <div className="box-row height-100"></div>
                                 </div>
                                <div className="col-xs-1 col-window height-100" id="a2b2" >               
                                        <div className="row row-ab" >
                                            <div className="col-xs-2 height-100"></div>
                                            <div id="animation-wrapper" className="col-xs-8"> 
                                                <div id="animation-container" className="box-row"> 
                                                     <img  id="folding-animation" src={"img/arkanimation_motionblur_once.gif"}/>
                                                </div>
                                                 <span id="animation-container2" className="box-row"> 
                                                    <div className="static-wrapper">
                                                        <img id="folding-animation2" src={"img/arklogo_static.svg"}/>
                                                     </div>
                                                </span>
                                            </div>
                                             <div className="col-xs-2"></div>
                                        </div>
                                        <div className="row row-c" id="c2">
                                            <div className="col-xs-12 height-100">
                                                <div className="box-row parent-center">
                                                        <div id="projects-panel" className="row pos-abs">
                                                            <div className="col-xs-12 next-button parent-center" >
                                                                <div id="projects-panel-content" className="row" >
                                                                    <div className="col-xs-12">
                                                                        <div className="box-row">
                                                                           <span className="button-label">PROJECTS</span>
                                                                            <img src={"img/airplane.svg"} width="18"/> 
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="col-xs-1 col-window-margin height-100">
                                    <div className="box-row"></div>
                                 </div>
                            </div>
                        </div>

                         <div className="col-xs-3 col-sm-3 height-100">
                            <div className="row row-a" id="a3">
                                <div className="col-xs-12"> 
                                    <div id="nav-bar" className="box-row">
                                         <ul id="nav-ul">
                                            <li className="nav-item"><a href="portfoliofull.html#about">About</a></li>
                                            <li className="nav-item"><a href="portfolio.html">Portfolio</a></li>
                                            <li className="nav-item"><a href="portfoliofull.html#contact">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row row-b" id="b3">
                                <div className="col-xs-12">
                                    <div id="text-block" className="box-row">
                                        <div >
                                            <p id="index-desc"> 
                                                    > web development.
                                                    <br />
                                                    > graphic design.
                                                    <br />
                                                    > user experience.
                                                    <br />
                                                    >> what's next?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row row-c" id="c3">
                                <div className="col-xs-12"><div className="box-row"></div></div>
                            </div>
                        </div>
                    </div>
                </div>


                 <div className="col-xs-1">
                    <div className="box-row"></div>
                </div>
            </div>


            <div className="row row-vert-margin">
                <div className="col-xs-12"><div className="box-row"></div></div>
            </div>
        </div>

        <div id="index-mobile" className="grid bg-index">
            <div className="row row-vert-margin">
                <div className="col-xs-12"><div className="box-row"></div></div>
            </div>
            <div className="row row-body">
                 <div className="col-xs-1" >
                    <div className="box-row"></div>
                </div>


                <div className="col-xs-10 height-100">
                     <div className="row row-full">
                         <div className="col-xs-2 height-100">
                             <div className="row row-a" id="a1">   
                                <a href="index.html">
                                     <div id="corner-container-mobile" className="col-xs-12"> <div className="box-row">
                                            <img className="f-left" id="corner-icon-mobile" src={"img/arklogobox.png"}/>
                                     </div></div>
                                </a>
                            </div>
                            <div className="row row-b" id="b1">
                                <div className="col-xs-12">
                                    <div className="box-row">
                                    </div>
                                </div>
                            </div>
                            <div className="row row-c" id="c1">
                                <div className="col-xs-12"><div className="box-row"></div></div>
                            </div>
                        </div>
                        <div className="col-xs-65 height-100">
                            <div className="row row-full">
                                 <div className="col-xs-1 col-window-margin height-100">
                                    <div className="box-row height-100"></div>
                                 </div>
                                <div className="col-xs-1 col-window height-100" id="a2b2">               
                                        <div className="row row-ab" >
                                            <div className="col-xs-2 height-100"></div>
                                            <div id="animation-wrapper-mobile" className="col-xs-8"> 
                                                <div id="animation-container-mobile" className="box-row"> 
                                                     <img id="folding-animation-mobile" src={"img/arkanimation_motionblur_once.gif"}/>
                                                </div>
                                                 <span id="animation-container2-mobile" className="box-row"> 
                                                    <div className="static-wrapper">
                                                        <img id="folding-animation2-mobile" src={"img/arklogo_static.svg"}/>
                                                     </div>
                                                </span>
                                            </div>
                                             <div className="col-xs-2"></div>
                                        </div>
                                        <div className="row row-c" id="c2">
                                            <div className="col-xs-12 height-100">
                                                <div className="box-row parent-center">
                                                        <div id="projects-panel-mobile" className="row pos-abs">
                                                            <div className="col-xs-12 next-button parent-center" >
                                                                <div id="projects-panel-content-mobile" className="row" >
                                                                    <div className="col-xs-12">
                                                                        <div className="box-row">
                                                                           <span className="button-label">PROJECTS</span>
                                                                            <img src={"img/airplane.svg"} width="18"/> 
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="col-xs-1 col-window-margin height-100">
                                    <div className="box-row"></div>
                                 </div>
                            </div>
                        </div>

                         <div className="col-xs-2 height-100">
                             <div className="row row-a" id="a1">   
                                    <div id="menu">
                                      <input type="checkbox" id="bi"></input>
                                      <div id="menu-container" className="zhu">
                                        <label for="bi"></label>
                                      </div>
                                      <div className="overlay overlay-bluntli">
                                        <label for="bi"></label>
                                          <nav>
                                            <ul role="nav" className="bluntli-menu-links">
                                              <li><a href="portfolioFull.html#about"><h1>About</h1></a></li>
                                              <li><a href="portfolio.html"><h1>Portfolio</h1></a></li>
                                              <li><a href="portfolioFull.html#contact"><h1>Contact</h1></a></li>
                                            </ul>
                                          </nav>
                                      </div>
                                    </div>
                            </div>
                            <div className="row row-b">
                                <div className="col-xs-12">
                                </div>
                            </div>
                            <div className="row row-c">
                                <div className="col-xs-12"><div className="box-row"></div></div>
                            </div>
                        </div>
                    </div>
                </div>


                 <div className="col-xs-1">
                    <div className="box-row"></div>
                </div>
            </div>


            <div className="row row-vert-margin">
                <div className="col-xs-12"><div className="box-row"></div></div>
            </div>
        </div>
     </div>
    );
  }

}
