import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import '../css/base.css';
import '../css/grid.css';
import '../css/elements.css';
import '../css/layout.css';
import '../css/skins/blue.css';
import img140x140 from '../images/140x140.png';

class Main extends Component {
  render() {
    return (
        <div>
            <div id="wrap">

        		<div id="header">

        			<div className="row cv-section">
                        <div className="span9">

                            <div className="cv-section-title">

                                <img src={img140x140} alt="" />

                                <h1>
                                    John Smith
                                    <small>Front End Developer</small>
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
                                    <span className="hidden-tablet">Email: </span><a href="mailto:john@sitename.com">john@sitename.com</a>
                                    <br /><span className="hidden-tablet">Phone: </span>(123) 456-7890
                                    <br /><span className="hidden-tablet">Web: </span><a href="#">www.johnsmithsite.com</a>
                                </p>

                            </div>

                        </div>
                    </div>


        		</div>
        		<div id="content">


                    <div className="row cv-section">
                        <div className="span3">

                            <div className="cv-section-title">

                                <h2>Profesional Profile</h2>

                            </div>

                        </div>
                        <div className="span9">

                            <div className="cv-item">

                                <p>Laecenas ac diam vel leo fringilla elementum. Quisque mi sapien, vulputate at felis in, rhoncus
                                fringilla sem. Nunc non magna volutpat, bibendum magna ac, laoreet lectus. Vivamus et nibh ac
                                arcu lobortis elementum eget sed mi. Pellentesque auctor ligula a ante tempus interdum. Praesent
                                sed luctus ligula. Nam varius, mauris vitae accumsan pharetra, enim lacus eleifend nibh, in mattis
                                enim magna in arcu. </p>

                            <p className="last">Donec auctor lacus eu diam congue tempor. Aliquam gravida nec turpis at sagittis. Proin molestie
                                enim non nisi porttitor posuere. Ut blandit justo at sapien iaculis rutrum. Quisque vel diam at mi
                                mattis tincidunt nec id odio. </p>

                            </div>

                        </div>
                    </div>

                    <div className="row cv-section">
                        <div className="span3">

                            <div className="cv-section-title">

                                <h2>Work Experience</h2>

                            </div>

                        </div>
                        <div className="span9">

                            <div className="cv-item">

                                <p className="period">July 2008 - Present</p>

                                <h3><strong>Senior Project Manager</strong></h3>
                                <h4>Web Design Studios, Full-Time</h4>

                                <br />

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula, magna et bibendum
                                malesuada, purus augue suscipit dolor, vitae fringilla dui nibh non lectus. Curabitur in
                                pellentesque tortor. Nunc posuere vestibulum augue, quis posuere orci blandit vitae. Suspendisse
                                dignissim elit dui, ac dictum felis interdum nec. </p>

                            <ul className="fill-circle">
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                    <li>Vivamus vitae libero odio, eu interdum elit</li>
                                    <li>Donec dignissim purus vel leo accumsan interdum</li>
                                    <li>Proin sit amet massa mi, in volutpat ante</li>
                                </ul>

                            </div>

                            <div className="cv-item">

                                <p className="period">April 2007 - May 2008</p>

                                <h3><strong>Front End Developer</strong></h3>
                                <h4>Acme Advertising, Full-Time</h4>

                                <br />

                                <p>Curabitur in pellentesque tortor. Nunc posuere vestibulum augue, quis posuere orci blandit
                                vitae. Suspendisse dignissim elit dui, ac dictum felis interdum nec. </p>

                            <ul className="fill-circle">
                                    <li>Vivamus vitae libero odio, eu interdum elit</li>
                                    <li>Donec dignissim purus vel leo accumsan interdum</li>
                                    <li>Proin sit amet massa mi, in volutpat ante</li>
                                </ul>

                            </div>

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

                        	<div className="cv-item">

                                <h3><strong>Boston State Univerity</strong></h3>
                                <h4>Dual Major, Web Design and English - 3.9 GPA</h4>

                                <br />

                                <p className="last">Morbi in mi non velit dapibus tincidunt ut vel dolor. Class aptent taciti sociosqu ad litora torquent
                                per conubia nostra, per inceptos himenaeos. Morbi elementum urna vitae justo vehicula, in lacinia magna ornare.
                                Aenean porttitor, quam quis fermentum consequat, eros lorem imperdiet lorem,.</p>

                            </div>

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
  }
}

Main.propTypes = { };

function mapStateToProps(state) {
  return { };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps)(Main);
