import React from 'react';
import { connect } from 'react-redux';
import '../css/base.css';
import '../css/grid.css';
import '../css/elements.css';
import '../css/layout.css';
import '../css/skins/blue.css';
import img140x140 from '../images/140x140.png';
import cv from '../data/en';
import Work from '../components/Work';
import Profile from '../components/Profile';
import Education from '../components/Education';
import reverse from 'lodash/reverse';

const Main = () => (
    <div>
        <div id="wrap">
            <div id="header">
                <div className="row cv-section">
                    <div className="span9">
                        <div className="cv-section-title">
                            <img src={img140x140} alt="" />
                            <h1>
                                {cv.name}
                                <small>{cv.title}</small>
                            </h1>
                        </div>
                    </div>
                    <div className="span3">
                        <div className="cv-item">
                            <div className="social-media fixed">
                                <a href="#" className="facebook-icon social-icon">
                                    <i className="fa fa-facebook"></i>
                                </a>
                                <a href="#" className="twitter-icon social-icon">
                                    <i className="fa fa-twitter"></i>
                                </a>
                                <a href="#" className="googleplus-icon social-icon">
                                    <i className="fa fa-google-plus"></i>
                                </a>
                                <a href="#" className="linkedin-icon social-icon">
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

                        <div className="cv-item">

                            <p className="period">Expert, 4 Years</p>

                            <h3 className="text-uppercase"><strong>Html5 &amp; Css3</strong></h3>

                            <br className="clear" />

                            <p className="last">Vestibulum feugiat gravida est nec ultrices. Pellentesque habitant morbi tristique senectus et netus
                            et malesuada fames ac turpis egestas. Etiam vel velit quam. Donec quis porta libero.</p>

                        </div>

                        <div className="cv-item">

                            <p className="period">Advanced, 2 Years</p>

                            <h3><strong>Javascript</strong></h3>

                            <br className="clear" />

                            <p className="last">Morbi in mi non velit dapibus tincidunt ut vel dolor. Class aptent taciti sociosqu ad litora torquent
                            per conubia nostra, per inceptos himenaeos. Morbi elementum urna vitae justo vehicula, in lacinia magna
                            ornare. Aenean porttitor, quam quis fermentum consequat.</p>

                        </div>

                        <div className="cv-item">

                            <p className="period">Beginer, 1 Year</p>

                            <h3><strong>jQuerry</strong></h3>

                            <br className="clear" />

                            <p>Nunc imperdiet placerat diam et aliquet. Suspendisse massa neque, rhoncus eget posuere ac, aliquet ut
                            mi. Etiam rhoncus placerat lorem eu posuere.</p>

                            <p className="last">Nunc dignissim commodo urna, eget bibendum nisl vehicula nec. Mauris faucibus erat elit, nec malesuada
                            augue varius sit amet. Morbi sit amet scelerisque risus. Duis vulputate, dolor ut mattis aliquam, massa diam
                            imperdiet ante, vel viverra tortor risus sit amet eros. </p>

                        </div>

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
                        <h4 className="copyright">&copy; 2014 John Smith. <span className="hidden-phone">All rights reserved.</span></h4>
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
