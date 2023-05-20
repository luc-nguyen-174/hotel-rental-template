import React from 'react';

function ComingSoon(props) {
    return (
        <div>
            <div className="banner coming-soon">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active item-bg">
                            <img className="d-block w-100 h-100" src="assets/img/banner/img-4.jpg" alt="banner"/>
                            <div className="carousel-caption banner-slider-inner d-flex h-100">
                                <div className="carousel-content container">
                                    <div className="cmt">
                                        <a href="/">
                                            <img src={"assets/img/logos/logo-white.png"} alt="logo"/>
                                        </a>
                                    </div>
                                    <div className="cm">
                                        <h1>We're Coming Soon!</h1>
                                        <p>We are working hard to bring you new experience</p>
                                        <a href="#" className="btn btn-lg btn-white-lg-outline">Subscribe</a>
                                        <a href="#" className="btn btn-lg btn-white-lg-outline">Contact</a>
                                    </div>
                                    <div className="cmb">
                                        <ul className="social-list clearfix">
                                            <li><a href="#" className="facebook-bg"><i
                                                className="fa fa-facebook"></i></a></li>
                                            <li><a href="#" className="twitter-bg"><i className="fa fa-twitter"></i></a>
                                            </li>
                                            <li><a href="#" className="google-bg"><i
                                                className="fa fa-google-plus"></i></a></li>
                                            <li><a href="#" className="rss-bg"><i className="fa fa-rss"></i></a>
                                            </li>
                                            <li><a href="#" className="linkedin-bg"><i
                                                className="fa fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ComingSoon;