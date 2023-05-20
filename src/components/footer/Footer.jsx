import React from 'react';

function Footer(props) {
    return (
        <div>
            <footer className="footer-1">
                <div className="container footer-inner">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-item">
                                <h4>Contact Us</h4>
                                <ul className="contact-info">
                                    <li>
                                        <i className="flaticon-facebook-placeholder-for-locate-places-on-maps"></i>20/F
                                        Green Road, Dhanmondi, Dhaka
                                    </li>
                                    <li>
                                        <i className="fa fa-envelope"></i><a
                                        href="mailto:sales@hotelempire.com">info@themevessel.com</a>
                                    </li>
                                    <li>
                                        <i className="fa fa-phone"></i><a href="tel:+55-417-634-7071">+0477 85X6 552</a>
                                    </li>
                                    <li>
                                        <i className="fa fa-fax"></i>+0487 85X6 224
                                    </li>
                                    <li>
                                        <i className="fa fa-skype"></i><a
                                        href="mailto:info@green.com">info@green.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
                            <div className="footer-item">
                                <h4>
                                    Useful Links
                                </h4>
                                <ul className="links">
                                    <li>
                                        <a href="#"><i className="fa fa-angle-right"></i>Home</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-angle-right"></i>About us</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-angle-right"></i>Service</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-angle-right"></i>Contact Us</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-angle-right"></i>Properties Grid</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-angle-right"></i>Blog Post</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-angle-right"></i>Property Details</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="footer-item recent-posts">
                                <h4>Recent Properties</h4>
                                <div className="media mb-4">
                                    <a href="properties-details.html">
                                        <img src="assets/img/sub-property/sub-property.jpg" alt="sub-property"/>
                                    </a>
                                    <div className="media-body align-self-center">
                                        <h5>
                                            <a href="properties-details.html">Beautiful Single Home</a>
                                        </h5>
                                        <p>Feb 27, 2020 | $1045,000</p>
                                    </div>
                                </div>
                                <div className="media mb-4">
                                    <a href="properties-details.html">
                                        <img src="assets/img/sub-property/sub-property-2.jpg" alt="sub-property-2"/>
                                    </a>
                                    <div className="media-body align-self-center">
                                        <h5>
                                            <a href="properties-details.html">Sweet Family Home</a>
                                        </h5>
                                        <p>Mar 14, 2020 | $944,000</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <a href="properties-details.html">
                                        <img src="assets/img/sub-property/sub-property-3.jpg" alt="sub-property-3"/>
                                    </a>
                                    <div className="media-body align-self-center">
                                        <h5>
                                            <a href="properties-details.html">Real Luxury Villa</a>
                                        </h5>
                                        <p>Apr 14, 2020 | $1420,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-item clearfix">
                                <div className="submitNewsletter">
                                    <h4>Subscribe</h4>
                                    <div className="Subscribe-box">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since,</p>
                                        <form action="#" method="GET">
                                            <input type="text" className="form-contact" name="email"
                                                   placeholder="Enter Address"/>
                                            <button type="submit" name="submitNewsletter" className="btn btn-color">
                                                <i className="fa fa-paper-plane"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sub-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <p className="copy">© 2023 <a href="#">AECC</a> All Rights Reserved.</p>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <ul className="social-list clearfix">
                                    <li><a href="#" className="facebook-bg"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#" className="twitter-bg"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#" className="google-bg"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a href="#" className="linkedin-bg"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;