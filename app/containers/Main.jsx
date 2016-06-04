import React from 'react';
import { connect } from 'react-redux';
import '../css/base.css';
import '../css/grid.css';
import '../css/layout.css';
import '../css/skins/blue.css';
import '../css/custom.css';
import portrait from '../images/portrait.jpg';
import cv from '../data/en';
import Work from '../components/Work';
import Profile from '../components/Profile';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Project from '../components/Project';
import reverse from 'lodash/reverse';
import frFlag from '../images/fr.png';
import ukFlag from '../images/uk.png';
import Mailto from 'react-encoded-mailto';
import WorkDetailsSwitch from '../components/WorkDetailsSwitch';

const Main = () => (
    <div>
        <a href="https://github.com/antoinejaussoin/cv">
            <img style={{ position: 'absolute', top: 0, left: 0, border: 0 }} src="https://camo.githubusercontent.com/c6286ade715e9bea433b4705870de482a654f78a/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f77686974655f6666666666662e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_left_white_ffffff.png" />
        </a>
        <div id="wrap">
            <div id="header">
                <div className="row cv-section">
                    <div className="span9">
                        <div className="cv-section-title">
                            <img src={portrait} alt="CV" style={{ width: 140 }} />
                            <h1>
                                {cv.name}
                                <small>{cv.title}</small>
                                <small className="subtitle">{cv.subtitle}</small>
                            </h1>
                        </div>
                    </div>
                    <div className="span3">
                        <div className="cv-item">
                            <div className="social-media fixed">
                                <a href="https://www.linkedin.com/in/jantoine" className="linkedin-icon social-icon">
                                    <i className="fa fa-linkedin"></i>
                                </a>
                                <a href="https://github.com/antoinejaussoin" className="github-icon social-icon">
                                    <i className="fa fa-github"></i>
                                </a>
                                <a href="https://twitter.com/antjaus" className="twitter-icon social-icon">
                                    <i className="fa fa-twitter"></i>
                                </a>
                                <a href="https://stackoverflow.com/users/641124/antoine-jaussoin" className="stack-overflow-icon social-icon">
                                    <i className="fa fa-stack-overflow"></i>
                                </a>
                            </div>

                            <p className="last">
                                <img src={frFlag} alt="French Flag" />&nbsp;<img src={ukFlag} alt="UK Flag" />
                                <br />
                                <br />{cv.bio}
                                <br /><span className="hidden-tablet">Email: </span><Mailto email={cv.email} obfuscate>{cv.email.replace('@', '(at)')}</Mailto>
                                <br /><span className="hidden-tablet">Phone: </span>{cv.phone}
                                <br /><span className="hidden-tablet">Web: </span><a href={cv.website}>{cv.website}</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="content">
                <div className="row cv-section">
                    <div className="span3">
                        <div className="cv-section-title">
                            <h2>Professional Profile</h2>
                        </div>
                    </div>
                    <div className="span9">
                        <Profile profile={cv.profile} />
                    </div>
                </div>

                <div className="row cv-section">
                    <div className="span3">
                        <div className="cv-section-title">
                            <h2>Portfolio</h2>
                        </div>
                    </div>
                    <div className="span9">
                        <div className="projects">
                            {cv.projects.map((item, i) => <Project item={item} key={i} />)}
                        </div>
                    </div>
                </div>

                <div className="row cv-section">
                    <div className="span3">
                        <div className="cv-section-title">
                            <h2>Work Experience</h2>
                        </div>
                        Show details: &nbsp;&nbsp;<WorkDetailsSwitch />
                    </div>
                    <div className="span9">
                        {reverse(cv.work).map((item, i) => <Work item={item} key={i} />)}
                    </div>
                </div>

                <div className="row cv-section">
                    <div className="span3">
                        <div className="cv-section-title">
                            <h2>Technical Skills</h2>
                        </div>
                    </div>
                    <div className="span9">
                        {cv.skills.map((item, i) => <Skills item={item} key={i} />)}
                    </div>
                </div>

                <div className="row cv-section">
                    <div className="span3">
                        <div className="cv-section-title">
                            <h2>Education</h2>
                        </div>
                    </div>
                    <div className="span9">
                        {reverse(cv.education).map((item, i) => <Education item={item} key={i} />)}
                    </div>
                </div>


            </div>
            <div id="footer">
                <div className="row">
                    <div className="span12">
                        <h4 className="copyright">&copy; 2016 Antoine Jaussoin. <span className="hidden-phone">All rights reserved.</span></h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default connect()(Main);
