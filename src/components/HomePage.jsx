import React from 'react';
import Agents from "./Agents";
import Search from "./Search";
import TopHeader from "./header/TopHeader";
import MainHeader from "./header/MainHeader";
import Footer from "./footer/Footer";

function HomePage(props) {
    return (
        <div>
            <div className="page_loader"></div>
            {/*Top header start*/}
            <TopHeader/>
            {/* Top header end */}

            {/* main header start */}
            <MainHeader/>
            {/* main header end */}

            {/* Sidenav start */}
            <nav id="sidebar" className="nav-sidebar">
                {/* Close btn*/}
                <div id="dismiss">
                    <i className="fa fa-close"></i>
                </div>
                <div className="sidebar-inner">
                    <div className="sidebar-logo">
                        <img src="assets/img/logos/black-logo.png" alt="sidebarlogo"/>
                    </div>
                    <div className="sidebar-navigation">
                        <h3 className="heading">Pages</h3>
                        <ul className="menu-list">
                            <li><a href="#" className="active pt0">Index <em className="fa fa-chevron-down"></em></a>
                                <ul>
                                    <li><a href="index.html">Index 1</a></li>
                                    <li><a href="index-2.html">Index 2</a></li>
                                    <li><a href="index-3.html">Index 3</a></li>
                                    <li><a href="index-4.html">Index 4</a></li>
                                    <li><a href="index-5.html">Index 5</a></li>
                                    <li><a href="index-6.html">Index 6</a></li>
                                    <li><a href="index-7.html">Index 7</a></li>
                                    <li><a href="index-8.html">Index 8</a></li>
                                    <li><a href="index-9.html">Index 9</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Properties <em className="fa fa-chevron-down"></em></a>
                                <ul>
                                    <li>
                                        <a href="#">List Layout <em className="fa fa-chevron-down"></em></a>
                                        <ul>
                                            <li><a href="properties-list-rightside.html">Right Sidebar</a></li>
                                            <li><a href="properties-list-leftside.html">Left Sidebar</a></li>
                                            <li><a href="properties-list-fullwidth.html">Fullwidth</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Grid Layout <em className="fa fa-chevron-down"></em></a>
                                        <ul>
                                            <li><a href="properties-grid-rightside.html">Right Sidebar</a></li>
                                            <li><a href="properties-grid-leftside.html">Left Sidebar</a></li>
                                            <li><a href="properties-grid-fullwidth.html">Fullwidth</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Map View <em className="fa fa-chevron-down"></em></a>
                                        <ul>
                                            <li><a href="properties-map-rightside-list.html">Map List Right Sidebar</a></li>
                                            <li><a href="properties-map-leftside-list.html">Map List Left Sidebar</a></li>
                                            <li><a href="properties-map-rightside-grid.html">Map Grid Right Sidebar</a></li>
                                            <li><a href="properties-map-leftside-grid.html">Map Grid Left Sidebar</a></li>
                                            <li><a href="properties-map-full.html">Map FullWidth</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Property Detail <em className="fa fa-chevron-down"></em></a>
                                        <ul>
                                            <li><a href="properties-details.html">Property Detail 1</a></li>
                                            <li><a href="properties-details-2.html">Property Detail 2</a></li>
                                            <li><a href="properties-details-3.html">Property Detail 3</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Pages <em className="fa fa-chevron-down"></em></a>
                                <ul>
                                    <li>
                                        <a href="#">My Account <em className="fa fa-chevron-down"></em></a>
                                        <ul>
                                            <li><a href="user-profile.html">User profile</a></li>
                                            <li><a href="my-properties.html">My Properties</a></li>
                                            <li><a href="favorited-properties.html">Favorited Properties</a></li>
                                            <li><a href="submit-property.html">Submit Property</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">About <em className="fa fa-chevron-down"></em></a>
                                        <ul>
                                            <li><a href="about.html">About Us</a></li>
                                            <li><a href="about-me.html">About Me</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Services <em className="fa fa-chevron-down"></em></a>
                                        <ul>
                                            <li><a href="services.html">Services 1</a></li>
                                            <li><a href="services-2.html">Services 2</a></li>
                                            <li><a href="services-details.html">Services Details</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Pricing Tables <em className="fa fa-chevron-down"></em></a>
                                        <ul>
                                            <li><a href="pricing-tables-1.html">Pricing Tables 1</a></li>
                                            <li><a href="pricing-tables-2.html">Pricing Tables 2</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Gallery <em className="fa fa-chevron-down"></em></a>
                                        <ul>
                                            <li><a href="gallery-1.html">Gallery 1</a></li>
                                            <li><a href="gallery-2.html">Gallery 2</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Faq <em className="fa fa-chevron-down"></em></a>
                                        <ul>
                                            <li><a href="faq-1.html">Faq 1</a></li>
                                            <li><a href="faq-2.html">Faq 2</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Typography <em className="fa fa-chevron-down"></em></a>
                                        <ul>
                                            <li><a href="typography.html">Typography 1</a></li>
                                            <li><a href="typography-2.html">Typography 2</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">404 Error <em className="fa fa-chevron-down"></em></a>
                                        <ul>
                                            <li><a href="pages-404.html">404 Error 1</a></li>
                                            <li><a href="pages-404-2.html">404 Error 2</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="properties-comparison.html">Properties Comparison</a></li>
                                    <li><a href="search-brand.html">Search Brand</a></li>
                                    <li><a href="elements.html">Elements</a></li>
                                    <li><a href="coming-soon.html">Coming Soon</a></li>
                                    <li><a href="login.html">Login/Register</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#"> Agents <em className="fa fa-chevron-down"></em></a>
                                <ul>
                                    <li>
                                        <a href="#">Agent List <em className="fa fa-chevron-down"></em></a>
                                        <ul>
                                            <li><a href="agent-list.html">Agent List 1</a></li>
                                            <li><a href="agent-list-2.html">Agent List 2</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Agent Grid <em className="fa fa-chevron-down"></em></a>
                                        <ul>
                                            <li><a href="agent-grid.html">Agent Grid 1</a></li>
                                            <li><a href="agent-grid-2.html">Agent Grid 2</a></li>
                                            <li><a href="agent-grid-3.html">Agent Grid 3</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="agent-detail.html">Agent Detail</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Blog <em className="fa fa-chevron-down"></em></a>
                                <ul>
                                    <li>
                                        <a href="#">Columns<em className="fa fa-chevron-down"></em></a>
                                        <ul>
                                            <li><a href="blog-columns-2col.html">2 Columns</a></li>
                                            <li><a href="blog-columns-3col.html">3 Columns</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">classNameic <em className="fa fa-chevron-down"></em></a>
                                        <ul>
                                            <li><a href="blog-classNameic-sidebar-right.html">Right Sidebar</a></li>
                                            <li><a href="blog-classNameic-sidebar-left.html">Left Sidebar</a></li>
                                            <li><a href="blog-classNameic-fullwidth.html">FullWidth</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Blog Details <em className="fa fa-chevron-down"></em></a>
                                        <ul>
                                            <li><a href="blog-single-sidebar-right.html">Right Sidebar</a></li>
                                            <li><a href="blog-single-sidebar-left.html">Left Sidebar</a></li>
                                            <li><a href="blog-single-fullwidth.html">Fullwidth</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="#">Shop <em className="fa fa-chevron-down"></em></a>
                                <ul>

                                    <li><a className="dropdown-item" href="shop-list.html">Shop List</a></li>
                                    <li><a className="dropdown-item" href="shop-cart.html">Shop Cart</a></li>
                                    <li> <a className="dropdown-item" href="shop-checkout.html">Shop Checkout</a></li>
                                    <li><a className="dropdown-item" href="shop-single.html">Shop Details</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Contact <em className="fa fa-chevron-down"></em></a>
                                <ul>
                                    <li><a className="dropdown-item" href="contact-1.html">Contact 1</a></li>
                                    <li><a className="dropdown-item" href="contact-2.html">Contact 2</a></li>
                                    <li><a className="dropdown-item" href="contact-3.html">Contact 3</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="submit-property.html">Submit Property</a>
                            </li>
                        </ul>
                    </div>
                    <div className="get-in-touch">
                        <h3 className="heading">Get in Touch</h3>
                        <div className="media">
                            <i className="fa fa-phone"></i>
                            <div className="media-body">
                                <a href="tel:0477-0477-8556-552">0477 8556 552</a>
                            </div>
                        </div>
                        <div className="media">
                            <i className="fa fa-envelope"></i>
                            <div className="media-body">
                                <a href="#">info@themevessel.com</a>
                            </div>
                        </div>
                        <div className="media mb-0">
                            <i className="fa fa-fax"></i>
                            <div className="media-body">
                                <a href="#">info@themevessel.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="get-social">
                        <h3 className="heading">Get Social</h3>
                        <a href="#" className="facebook-bg">
                            <i className="fa fa-facebook"></i>
                        </a>
                        <a href="#" className="twitter-bg">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a href="#" className="google-bg">
                            <i className="fa fa-google"></i>
                        </a>
                        <a href="#" className="linkedin-bg">
                            <i className="fa fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </nav>
            {/* Sidenav end */}

            {/* Banner start */}
            <div className="banner banner-bg" id="particles-banner-wrapper">
                <div id="particles-banner-2"></div>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item item-bg active">
                            <div className="carousel-caption banner-slider-inner d-flex h-100 text-left">
                                <div className="carousel-content container b1-inner-2">
                                    <div className="t-center">
                                        <h3 data-animation="animated fadeInDown delay-05s">Best Place <span>For Sell</span> Properties</h3>
                                        <p className="text-p" data-animation="animated fadeInUp delay-10s">
                                            This is real estate website template based on Bootstrap 4 framework.
                                        </p>
                                        <a data-animation="animated fadeInUp delay-10s" href="#" className="btn btn-2"><span>Get Started Now</span></a>
                                        <a data-animation="animated fadeInUp delay-10s" href="#" className="btn btn-3"><span>Learn More</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item item-bg">
                            <div className="carousel-caption banner-slider-inner d-flex h-100 text-left">
                                <div className="carousel-content container b1-inner-2">
                                    <div className="t-right">
                                        <h3 data-animation="animated fadeInDown delay-05s">Find Your <span>Dream</span> Properties</h3>
                                        <p className="text-p" data-animation="animated fadeInUp delay-10s">
                                            This is real estate website template based on Bootstrap 4 framework.
                                        </p>
                                        <a data-animation="animated fadeInUp delay-10s" href="#" className="btn btn-2"><span>Get Started Now</span></a>
                                        <a data-animation="animated fadeInUp delay-10s" href="#" className="btn btn-3"><span>Learn More</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item item-bg">
                            <div className="carousel-caption banner-slider-inner d-flex h-100 text-left">
                                <div className="carousel-content container b1-inner-2">
                                    <div className="t-left">
                                        <h3 data-animation="animated fadeInUp delay-05s">Discover Modern <span>Villa</span></h3>
                                        <p className="text-p" data-animation="animated fadeInUp delay-10s">
                                            This is real estate website template based on Bootstrap 4 framework.
                                        </p>
                                        <a data-animation="animated fadeInUp delay-10s" href="#" className="btn btn-2"><span>Get Started Now</span></a>
                                        <a data-animation="animated fadeInUp delay-10s" href="#" className="btn btn-3"><span>Learn More</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="slider-mover-left" aria-hidden="true">
                <i className="fa fa-angle-left"></i>
            </span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="slider-mover-right" aria-hidden="true">
                <i className="fa fa-angle-right"></i>
            </span>
                    </a>
                    <div className="btn-secton btn-secton-2">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                    </div>
                </div>

                {/* Search area start */}
                <div className="search-area sa-show-2" id="search-area-4">
                    <div className="container">
                        <div className="search-area-inner">
                            <div className="search-contents ">
                                <form action="https://storage.googleapis.com/theme-vessel-items/checking-sites/xero-2-html/HTML/main/index.html" method="GET">
                                    <div className="row">
                                        <div className="col-6 col-lg-3 col-md-3">
                                            <div className="form-group">
                                                <select className="selectpicker search-fields" name="brand">
                                                    <option>Area From</option>
                                                    <option>1500</option>
                                                    <option>1200</option>
                                                    <option>900</option>
                                                    <option>600</option>
                                                    <option>300</option>
                                                    <option>100</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-6 col-lg-3 col-md-3">
                                            <div className="form-group">
                                                <select className="selectpicker search-fields" name="property-status">
                                                    <option>Property Status</option>
                                                    <option>For Sale</option>
                                                    <option>For Rent</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-6 col-lg-3 col-md-3">
                                            <div className="form-group">
                                                <select className="selectpicker search-fields" name="location">
                                                    <option>Location</option>
                                                    <option>United Kingdom</option>
                                                    <option>American Samoa</option>
                                                    <option>Belgium</option>
                                                    <option>Canada</option>
                                                    <option>Delaware</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-6 col-lg-3 col-md-3">
                                            <div className="form-group">
                                                <select className="selectpicker search-fields" name="category">
                                                    <option>Property Types</option>
                                                    <option>Residential</option>
                                                    <option>Commercial</option>
                                                    <option>Land</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-6 col-lg-3 col-md-3">
                                            <div className="form-group">
                                                <select className="selectpicker search-fields" name="body">
                                                    <option>Bedrooms</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    <option>6</option>
                                                    <option>7</option>
                                                    <option>8</option>
                                                    <option>9</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-6 col-lg-3 col-md-3">
                                            <div className="form-group">
                                                <select className="selectpicker search-fields" name="transmission">
                                                    <option>Bathrooms</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-6 col-lg-3 col-md-3">
                                            <div className="form-group">
                                                <div className="range-slider">
                                                    <div data-min="0" data-max="150000" data-unit="USD" data-min-name="min_price" data-max-name="max_price" className="range-slider-ui ui-slider" aria-disabled="false"></div>
                                                    <div className="clearfix"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 col-lg-3 col-md-3">
                                            <div className="form-group">
                                                <button className="btn btn-block btn-4" type="submit">Search</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Search area end */}
            </div>
            {/* banner end */}

            {/* Search area start */}
            <Search/>
            {/* Search area end */}

            {/* Featured properties start */}
            <div className="featured-properties content-area-19">
                <div className="container">
                    <div className="main-title">
                        <h1>Featured Properties</h1>
                    </div>
                    <div className="row filter-portfolio wow fadeInUp delay-04s">
                        <div className="cars">

                            <div className="col-lg-4 col-md-6 col-sm-12 filtr-item" data-category="3, 2">
                                <div className="property-box-7">
                                    <div className="property-thumbnail">
                                        <a href="properties-details.html" className="property-img">
                                            <div className="tag-2">For Sale</div>
                                            <div className="price-box"><span>$850.00</span> Per night</div>
                                            <img src="assets/img/property/img-4.jpg" alt="property-box-7" className="img-fluid"/>
                                        </a>
                                    </div>
                                    <div className="detail">
                                        <h1 className="title">
                                            <a href="properties-details.html">Real Luxury Villa</a>
                                        </h1>
                                        <div className="location">
                                            <a href="properties-details.html">
                                                <i className="flaticon-facebook-placeholder-for-locate-places-on-maps"></i>123 Kathal St. Tampa City,
                                            </a>
                                        </div>
                                    </div>
                                    <ul className="facilities-list clearfix">
                                        <li>
                                            <span>Area</span>3600 Sqft
                                        </li>
                                        <li>
                                            <span>Beds</span> 3
                                        </li>
                                        <li>
                                            <span>Baths</span> 2
                                        </li>
                                        <li>
                                            <span>Garage</span> 1
                                        </li>
                                    </ul>
                                    <div className="footer clearfix">
                                        <div className="pull-left days">
                                            <p><i className="fa fa-user"></i> Jhon Doe</p>
                                        </div>
                                        <ul className="pull-right">
                                            <li><a href="#"><i className="flaticon-heart-shape-outline"></i></a></li>
                                            <li><a href="#"><i className="flaticon-calendar"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12 filtr-item" data-category="2, 1">
                                <div className="property-box-7">
                                    <div className="property-thumbnail">
                                        <a href="properties-details.html" className="property-img">
                                            <div className="tag-2">For Rent</div>
                                            <div className="price-box"><span>$850.00</span> Per night</div>
                                            <img src="assets/img/property/img-5.jpg" alt="property-box-7" className="img-fluid"/>
                                        </a>
                                    </div>
                                    <div className="detail">
                                        <h1 className="title">
                                            <a href="properties-details.html">Beautiful Single Home</a>
                                        </h1>
                                        <div className="location">
                                            <a href="properties-details.html">
                                                <i className="flaticon-facebook-placeholder-for-locate-places-on-maps"></i>123 Kathal St. Tampa City,
                                            </a>
                                        </div>
                                    </div>
                                    <ul className="facilities-list clearfix">
                                        <li>
                                            <span>Area</span>3600 Sqft
                                        </li>
                                        <li>
                                            <span>Beds</span> 3
                                        </li>
                                        <li>
                                            <span>Baths</span> 2
                                        </li>
                                        <li>
                                            <span>Garage</span> 1
                                        </li>
                                    </ul>
                                    <div className="footer clearfix">
                                        <div className="pull-left days">
                                            <p><i className="fa fa-user"></i> Jhon Doe</p>
                                        </div>
                                        <ul className="pull-right">
                                            <li><a href="#"><i className="flaticon-heart-shape-outline"></i></a></li>
                                            <li><a href="#"><i className="flaticon-calendar"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12 filtr-item" data-category="3, 1, 2">
                                <div className="property-box-7">
                                    <div className="property-thumbnail">
                                        <a href="properties-details.html" className="property-img">
                                            <div className="tag-2">For Sale</div>
                                            <div className="price-box"><span>$850.00</span> Per night</div>
                                            <img src="assets/img/property/img-6.jpg" alt="property-box-7" className="img-fluid"/>
                                        </a>
                                    </div>
                                    <div className="detail">
                                        <h1 className="title">
                                            <a href="properties-details.html">Sweet Family Home</a>
                                        </h1>
                                        <div className="location">
                                            <a href="properties-details.html">
                                                <i className="flaticon-facebook-placeholder-for-locate-places-on-maps"></i>123 Kathal St. Tampa City,
                                            </a>
                                        </div>
                                    </div>
                                    <ul className="facilities-list clearfix">
                                        <li>
                                            <span>Area</span>3600 Sqft
                                        </li>
                                        <li>
                                            <span>Beds</span> 3
                                        </li>
                                        <li>
                                            <span>Baths</span> 2
                                        </li>
                                        <li>
                                            <span>Garage</span> 1
                                        </li>
                                    </ul>
                                    <div className="footer clearfix">
                                        <div className="pull-left days">
                                            <p><i className="fa fa-user"></i> Jhon Doe</p>
                                        </div>
                                        <ul className="pull-right">
                                            <li><a href="#"><i className="flaticon-heart-shape-outline"></i></a></li>
                                            <li><a href="#"><i className="flaticon-calendar"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12 filtr-item" data-category="3">
                                <div className="property-box-7">
                                    <div className="property-thumbnail">
                                        <a href="properties-details.html" className="property-img">
                                            <div className="tag-2">For Rent</div>
                                            <div className="price-box"><span>$850.00</span> Per night</div>
                                            <img src="assets/img/property/img-1.jpg" alt="property-box-7" className="img-fluid"/>
                                        </a>
                                    </div>
                                    <div className="detail">
                                        <h1 className="title">
                                            <a href="properties-details.html">Modern Family Home</a>
                                        </h1>
                                        <div className="location">
                                            <a href="properties-details.html">
                                                <i className="flaticon-facebook-placeholder-for-locate-places-on-maps"></i>123 Kathal St. Tampa City,
                                            </a>
                                        </div>
                                    </div>
                                    <ul className="facilities-list clearfix">
                                        <li>
                                            <span>Area</span>3600 Sqft
                                        </li>
                                        <li>
                                            <span>Beds</span> 3
                                        </li>
                                        <li>
                                            <span>Baths</span> 2
                                        </li>
                                        <li>
                                            <span>Garage</span> 1
                                        </li>
                                    </ul>
                                    <div className="footer clearfix">
                                        <div className="pull-left days">
                                            <p><i className="fa fa-user"></i> Jhon Doe</p>
                                        </div>
                                        <ul className="pull-right">
                                            <li><a href="#"><i className="flaticon-heart-shape-outline"></i></a></li>
                                            <li><a href="#"><i className="flaticon-calendar"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12 filtr-item" data-category="3, 2, 1">
                                <div className="property-box-7">
                                    <div className="property-thumbnail">
                                        <a href="properties-details.html" className="property-img">
                                            <div className="tag-2">For Sale</div>
                                            <div className="price-box"><span>$850.00</span> Per night</div>
                                            <img src="assets/img/property/img-2.jpg" alt="property-box-7" className="img-fluid"/>
                                        </a>
                                    </div>
                                    <div className="detail">
                                        <h1 className="title">
                                            <a href="properties-details.html">Relaxing Apartment</a>
                                        </h1>
                                        <div className="location">
                                            <a href="properties-details.html">
                                                <i className="flaticon-facebook-placeholder-for-locate-places-on-maps"></i>123 Kathal St. Tampa City,
                                            </a>
                                        </div>
                                    </div>
                                    <ul className="facilities-list clearfix">
                                        <li>
                                            <span>Area</span>3600 Sqft
                                        </li>
                                        <li>
                                            <span>Beds</span> 3
                                        </li>
                                        <li>
                                            <span>Baths</span> 2
                                        </li>
                                        <li>
                                            <span>Garage</span> 1
                                        </li>
                                    </ul>
                                    <div className="footer clearfix">
                                        <div className="pull-left days">
                                            <p><i className="fa fa-user"></i> Jhon Doe</p>
                                        </div>
                                        <ul className="pull-right">
                                            <li><a href="#"><i className="flaticon-heart-shape-outline"></i></a></li>
                                            <li><a href="#"><i className="flaticon-calendar"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12 filtr-item" data-category="1, 2">
                                <div className="property-box-7">
                                    <div className="property-thumbnail">
                                        <a href="properties-details.html" className="property-img">
                                            <div className="tag-2">For Rent</div>
                                            <div className="price-box"><span>$850.00</span> Per night</div>
                                            <img src="assets/img/property/img-3.jpg" alt="property-box-7" className="img-fluid"/>
                                        </a>
                                    </div>
                                    <div className="detail">
                                        <h1 className="title">
                                            <a href="properties-details.html">Masons Villas</a>
                                        </h1>
                                        <div className="location">
                                            <a href="properties-details.html">
                                                <i className="flaticon-facebook-placeholder-for-locate-places-on-maps"></i>123 Kathal St. Tampa City,
                                            </a>
                                        </div>
                                    </div>
                                    <ul className="facilities-list clearfix">
                                        <li>
                                            <span>Area</span>3600 Sqft
                                        </li>
                                        <li>
                                            <span>Beds</span> 3
                                        </li>
                                        <li>
                                            <span>Baths</span> 2
                                        </li>
                                        <li>
                                            <span>Garage</span> 1
                                        </li>
                                    </ul>
                                    <div className="footer clearfix">
                                        <div className="pull-left days">
                                            <p><i className="fa fa-user"></i> Jhon Doe</p>
                                        </div>
                                        <ul className="pull-right">
                                            <li><a href="#"><i className="flaticon-heart-shape-outline"></i></a></li>
                                            <li><a href="#"><i className="flaticon-calendar"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* Featured properties end */}


            {/* Recent Properties start */}
            <div className="recent-properties content-area-2">
                <div className="container">
                    <div className="main-title">
                        <h1>Recent Properties</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInLeft delay-04s">
                            <div className="property-box-8">
                                <div className="photo-thumbnail">
                                    <div className="photo">
                                        <img src="assets/img/property/img-12.jpg" alt="property-box-8" className="img-fluid"/>
                                            <a href="properties-details.html">
                                                <span className="blog-one__plus"></span>
                                            </a>
                                    </div>
                                    <div className="tag-for">For Rent</div>
                                    <div className="price-ratings-box">
                                        <p className="price">
                                            $178,000
                                        </p>
                                        <div className="ratings">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="detail">
                                    <div className="heading">
                                        <h3>
                                            <a href="properties-details.html">Real Luxury Villa</a>
                                        </h3>
                                        <div className="location">
                                            <a href="properties-details.html">
                                                <i className="flaticon-facebook-placeholder-for-locate-places-on-maps"></i>123 Kathal St. Tampa City,
                                            </a>
                                        </div>
                                    </div>
                                    <div className="properties-listing">
                                        <span>3 Beds</span>
                                        <span>2 Baths</span>
                                        <span>980 sqft</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp delay-04s">
                            <div className="property-box-8">
                                <div className="photo-thumbnail">
                                    <div className="photo">
                                        <img src="assets/img/property/img-13.jpg" alt="property-box-8" className="img-fluid"/>
                                            <a href="properties-details.html">
                                                <span className="blog-one__plus"></span>
                                            </a>
                                    </div>
                                    <div className="tag-for">For Sale</div>
                                    <div className="price-ratings-box">
                                        <p className="price">
                                            $178,000
                                        </p>
                                        <div className="ratings">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="detail">
                                    <div className="heading">
                                        <h3>
                                            <a href="properties-details.html">Masons Villas</a>
                                        </h3>
                                        <div className="location">
                                            <a href="properties-details.html">
                                                <i className="flaticon-facebook-placeholder-for-locate-places-on-maps"></i>123 Kathal St. Tampa City,
                                            </a>
                                        </div>
                                    </div>
                                    <div className="properties-listing">
                                        <span>3 Beds</span>
                                        <span>2 Baths</span>
                                        <span>980 sqft</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp delay-04s">
                            <div className="property-box-8">
                                <div className="photo-thumbnail">
                                    <div className="photo">
                                        <img src="assets/img/property/img-14.jpg" alt="property-box-8" className="img-fluid"/>
                                            <a href="properties-details.html">
                                                <span className="blog-one__plus"></span>
                                            </a>
                                    </div>
                                    <div className="tag-for">For Rent</div>
                                    <div className="price-ratings-box">
                                        <p className="price">
                                            $178,000
                                        </p>
                                        <div className="ratings">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="detail">
                                    <div className="heading">
                                        <h3>
                                            <a href="properties-details.html">Luxury Villa</a>
                                        </h3>
                                        <div className="location">
                                            <a href="properties-details.html">
                                                <i className="flaticon-facebook-placeholder-for-locate-places-on-maps"></i>123 Kathal St. Tampa City,
                                            </a>
                                        </div>
                                    </div>
                                    <div className="properties-listing">
                                        <span>3 Beds</span>
                                        <span>2 Baths</span>
                                        <span>980 sqft</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInRight delay-04s">
                            <div className="property-box-8">
                                <div className="photo-thumbnail">
                                    <div className="photo">
                                        <img src="assets/img/property/img-15.jpg" alt="property-box-8" className="img-fluid"/>
                                            <a href="properties-details.html">
                                                <span className="blog-one__plus"></span>
                                            </a>
                                    </div>
                                    <div className="tag-for">For Sale</div>
                                    <div className="price-ratings-box">
                                        <p className="price">
                                            $178,000
                                        </p>
                                        <div className="ratings">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="detail">
                                    <div className="heading">
                                        <h3>
                                            <a href="properties-details.html">Park avenue</a>
                                        </h3>
                                        <div className="location">
                                            <a href="properties-details.html">
                                                <i className="flaticon-facebook-placeholder-for-locate-places-on-maps"></i>123 Kathal St. Tampa City,
                                            </a>
                                        </div>
                                    </div>
                                    <div className="properties-listing">
                                        <span>3 Beds</span>
                                        <span>2 Baths</span>
                                        <span>980 sqft</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Recent Properties end */}



            {/* Footer start */}
            <Footer/>
            {/* Footer end */}

            {/* Full Page Search */}
            <div id="full-page-search">
                <button type="button" className="close">×</button>
                <form action="#" className="search">
                    <input type="search" value="" placeholder="type keyword(s) here"/>
                    <button type="button" className="btn btn-sm btn-color">Search</button>
                </form>
            </div>

            {/* Property Video Modal */}
            <div className="modal property-modal fade" id="propertyModal" tabindex="-1" role="dialog" aria-labelledby="propertyModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="propertyModalLabel">
                                Find Your Dream Properties
                            </h5>
                            <p>
                                <i className="flaticon-facebook-placeholder-for-locate-places-on-maps"></i> 123 Kathal St. Tampa City,
                            </p>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-lg-6 modal-left">
                                    <div className="modal-left-content">
                                        <div id="modalCarousel" className="carousel slide" data-ride="carousel">
                                            <div className="carousel-inner" role="listbox">
                                                <div className="carousel-item active">
                                                    <iframe className="modalIframe" src="https://www.youtube.com/embed/V7IrnC9MISU" allowfullscreen></iframe>
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="assets/img/img-8.jpg" alt="Test ALT"/>
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="assets/img/img-9.jpg" alt="Test ALT"/>
                                                </div>
                                            </div>
                                            <a className="control control-prev" href="#modalCarousel" role="button" data-slide="prev">
                                                <i className="fa fa-angle-left"></i>
                                            </a>
                                            <a className="control control-next" href="#modalCarousel" role="button" data-slide="next">
                                                <i className="fa fa-angle-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 modal-right">
                                    <div className="modal-right-content">
                                        <section>
                                            <h3>Features</h3>
                                            <ul className="bullets">
                                                <li><i className="flaticon-bed"></i> Double Bed</li>
                                                <li><i className="flaticon-swimmer"></i> Swimming Pool</li>
                                                <li><i className="flaticon-bath"></i> 2 Bathroom</li>
                                                <li><i className="flaticon-car-repair"></i> Garage</li>
                                                <li><i className="flaticon-parking"></i> Parking</li>
                                                <li><i className="flaticon-theatre-masks"></i> Home Theater</li>
                                                <li><i className="flaticon-old-typical-phone"></i> Telephone</li>
                                                <li><i className="flaticon-green-park-city-space"></i> Private space</li>
                                            </ul>
                                        </section>
                                        <section>
                                            <h3>Overview</h3>
                                            <ul className="bullets bullets2">
                                                <li> Area</li>
                                                <li>Condition</li>
                                                <li>2 Year</li>
                                                <li>Price</li>
                                                <li>2500 Sq Ft:3400</li>
                                                <li>New</li>
                                                <li>2018</li>
                                                <li>$178,000</li>
                                            </ul>
                                        </section>
                                        <div className="ratings-2">
                                            <span className="ratings-box">4.5/5</span>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                            <span>( 7 Reviews )</span>
                                        </div>
                                        <a href="properties-details.html" className="btn btn-show btn-theme">Show Detail</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Off-canvas sidebar */}
            <div className="off-canvas-sidebar">
                <div className="off-canvas-sidebar-wrapper">
                    <div className="off-canvas-header">
                        <a className="close-offcanvas" href="#"><span className="fa fa-times"></span></a>
                    </div>
                    <div className="off-canvas-content">
                        <aside className="canvas-widget">
                            <div className="logo-sitebar text-center">
                                <img src="assets/img/logos/logo.png" alt="logo"/>
                            </div>
                        </aside>
                        <aside className="canvas-widget">
                            <ul className="menu">
                                <li className="menu-item menu-item-has-children"><a href="index.html">Home</a></li>
                                <li className="menu-item"><a href="properties-grid-leftside.html">Properties List</a></li>
                                <li className="menu-item"><a href="properties-details.html">Property Detail</a></li>
                                <li className="menu-item"><a href="blog-single-sidebar-right.html">Blog</a></li>
                                <li className="menu-item"><a href="about.html">About  US</a></li>
                                <li className="menu-item"><a href="contact-3.html">Contact US</a></li>
                            </ul>
                        </aside>
                        <aside className="canvas-widget">
                            <ul className="social-icons">
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                <li><a href="#"><i className="fa fa-vk"></i></a></li>
                            </ul>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;