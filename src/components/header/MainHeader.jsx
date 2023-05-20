import React from 'react';

function MainHeader(props) {
    return (
        <div>
            <header className="main-header sticky-header" id="main-header-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="navbar navbar-expand-lg navbar-light rounded">
                                <a className="navbar-brand logo" href="index.html">
                                    <img src="assets/img/logos/black-logo.png" alt="logo"/>
                                </a>
                                <button className="navbar-toggler" type="button" id="drawer">
                                    <span className="fa fa-bars"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbar">
                                    <ul className="navbar-nav  justify-content-center">
                                        <li className="nav-item dropdown active">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Index
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                <li><a className="dropdown-item" href="index.html">Index 1</a></li>
                                                <li><a className="dropdown-item" href="index-2.html">Index 2</a></li>
                                                <li><a className="dropdown-item" href="index-3.html">Index 3</a></li>
                                                <li><a className="dropdown-item" href="index-4.html">Index 4</a></li>
                                                <li><a className="dropdown-item" href="index-5.html">Index 5</a></li>
                                                <li><a className="dropdown-item" href="index-6.html">Index 6</a></li>
                                                <li><a className="dropdown-item" href="index-7.html">Index 7</a></li>
                                                <li><a className="dropdown-item" href="index-8.html">Index 8 (Map)</a></li>
                                                <li><a className="dropdown-item" href="index-9.html">Index 9 (Video)</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Properties
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">List Layout</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="properties-list-rightside.html">Right Sidebar</a></li>
                                                        <li><a className="dropdown-item" href="properties-list-leftside.html">Left Sidebar</a></li>
                                                        <li><a className="dropdown-item" href="properties-list-fullwidth.html">Fullwidth</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Grid Layout</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="properties-grid-rightside.html">Right Sidebar</a></li>
                                                        <li><a className="dropdown-item" href="properties-grid-leftside.html">Left Sidebar</a></li>
                                                        <li><a className="dropdown-item" href="properties-grid-fullwidth.html">Fullwidth</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Map View</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="properties-map-rightside-list.html">Map List Right Sidebar</a></li>
                                                        <li><a className="dropdown-item" href="properties-map-leftside-list.html">Map List Left Sidebar</a></li>
                                                        <li><a className="dropdown-item" href="properties-map-rightside-grid.html">Map Grid Right Sidebar</a></li>
                                                        <li><a className="dropdown-item" href="properties-map-leftside-grid.html">Map Grid Left Sidebar</a></li>
                                                        <li><a className="dropdown-item" href="properties-map-full.html">Map FullWidth</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Property Detail</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="properties-details.html">Property Detail 1</a></li>
                                                        <li><a className="dropdown-item" href="properties-details-2.html">Property Detail 2</a></li>
                                                        <li><a className="dropdown-item" href="properties-details-3.html">Property Detail 3</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink7" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Pages
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">My Account</a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a className="dropdown-item" href="user-profile.html">User profile</a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="my-properties.html">My Properties</a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="favorited-properties.html">Favorited Properties</a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="submit-property.html">Submit Property</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">About</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="about.html">About Us</a></li>
                                                        <li><a className="dropdown-item" href="about-me.html">About Me</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Services</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="services.html">Services 1</a></li>
                                                        <li><a className="dropdown-item" href="services-2.html">Services 2</a></li>
                                                        <li><a className="dropdown-item" href="services-details.html">Services Details</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Pricing Tables</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="pricing-tables-1.html">Pricing Tables 1</a></li>
                                                        <li><a className="dropdown-item" href="pricing-tables-2.html">Pricing Tables 2</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Gallery</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="gallery-1.html">Gallery 1</a></li>
                                                        <li><a className="dropdown-item" href="gallery-2.html">Gallery 2</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Faq</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="faq-1.html">Faq 1</a></li>
                                                        <li><a className="dropdown-item" href="faq-2.html">Faq 2</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Typography</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="typography.html">Typography 1</a></li>
                                                        <li><a className="dropdown-item" href="typography-2.html">Typography 2</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">404 Error</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="pages-404.html">404 Error 1</a></li>
                                                        <li><a className="dropdown-item" href="pages-404-2.html">404 Error 2</a></li>
                                                    </ul>
                                                </li>
                                                <li><a className="dropdown-item" href="properties-comparison.html">Properties Comparison</a></li>
                                                <li><a className="dropdown-item" href="search-brand.html">Search Brand</a></li>
                                                <li><a className="dropdown-item" href="elements.html">Elements</a></li>
                                                <li><a className="dropdown-item" href="coming-soon.html">Coming Soon</a></li>
                                                <li><a className="dropdown-item" href="login.html">Login/Register</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink6" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Agents
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Agent List</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="agent-list.html">Agent List 1</a></li>
                                                        <li><a className="dropdown-item" href="agent-list-2.html">Agent List 2</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Agent Grid</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="agent-grid.html">Agent Grid 1</a></li>
                                                        <li><a className="dropdown-item" href="agent-grid-2.html">Agent Grid 2</a></li>
                                                        <li><a className="dropdown-item" href="agent-grid-3.html">Agent Grid 3</a></li>
                                                    </ul>
                                                </li>
                                                <li><a className="dropdown-item" href="agent-detail.html">Agent Detail</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Blog
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Columns</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="blog-columns-2col.html">2 Columns</a></li>
                                                        <li><a className="dropdown-item" href="blog-columns-3col.html">3 Columns</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">classNameic</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="blog-classNameic-sidebar-right.html">Right Sidebar</a></li>
                                                        <li><a className="dropdown-item" href="blog-classNameic-sidebar-left.html">Left Sidebar</a></li>
                                                        <li><a className="dropdown-item" href="blog-classNameic-fullwidth.html">FullWidth</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Blog Details</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="blog-single-sidebar-right.html">Right Sidebar</a></li>
                                                        <li><a className="dropdown-item" href="blog-single-sidebar-left.html">Left Sidebar</a></li>
                                                        <li><a className="dropdown-item" href="blog-single-fullwidth.html">Fullwidth</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown4" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Shop
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown3">
                                                <a className="dropdown-item" href="shop-list.html">Shop List</a>
                                                <a className="dropdown-item" href="shop-cart.html">Shop Cart</a>
                                                <a className="dropdown-item" href="shop-checkout.html">Shop Checkout</a>
                                                <a className="dropdown-item" href="shop-single.html">Shop Details</a>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Contact
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown3">
                                                <a className="dropdown-item" href="contact-1.html">Contact 1</a>
                                                <a className="dropdown-item" href="contact-2.html">Contact 2</a>
                                                <a className="dropdown-item" href="contact-3.html">Contact 3</a>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className="nav navbar-nav ml-auto  justify-content-end">
                                        <li className="nav-item">
                                            <a  href="submit-property.html" className="submit-btn">
                                                Submit Property
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default MainHeader;