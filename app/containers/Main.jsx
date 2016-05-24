import React from 'react';
import { connect } from 'react-redux';
import '../css/base.css';
import '../css/grid.css';
import '../css/elements.css';
import '../css/layout.css';
import '../css/skins/blue.css';
import img140x140 from '../images/140x140.png';
import portrait from '../images/portrait.jpg';
import cv from '../data/en';
import Work from '../components/Work';
import Profile from '../components/Profile';
import Education from '../components/Education';
import Skills from '../components/Skills';
import reverse from 'lodash/reverse';

const Main = () => (
    <div>
        <div id="wrap">
            <div id="header">
                <div className="row cv-section">
                    <div className="span9">
                        <div className="cv-section-title">
                            <img src={portrait} alt="Photo" style={{width: 140}} />
                            <h1>
                                {cv.name}
                                <small>{cv.title}</small>
                            </h1>
                        </div>
                    </div>
                    <div className="span3">
                        <div className="cv-item">
                            <div className="social-media fixed">
                                <a href="https://www.facebook.com/antoine.jaussoin" className="facebook-icon social-icon">
                                    <i className="fa fa-facebook"></i>
                                </a>
                                <a href="https://twitter.com/antjaus" className="twitter-icon social-icon">
                                    <i className="fa fa-twitter"></i>
                                </a>
                                <a href="https://stackoverflow.com/users/641124/antoine-jaussoin" className="googleplus-icon social-icon">
                                    <i className="fa fa-stack-overflow"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/jantoine" className="linkedin-icon social-icon">
                                    <i className="fa fa-linkedin"></i>
                                </a>
                            </div>

                            <p className="last">
                                <span className="hidden-tablet">Email: </span><a href={'mailto:' + cv.email}>{cv.email}</a>
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
                            <h2>Work Experience</h2>
                        </div>
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

        <a id="back-to-top" href="#">
            <i className="fa fa-angle-up"></i>
        </a>

        <a id="print" href="javascript:window.print()" title="Print the CV">
            <i className="fa fa-print"></i>
        </a>

        <a id="pdf" href="#" title="Download it as a .pdf">
            <i className="fa fa-download"></i>
        </a>
    </div>
);

export default connect()(Main);
