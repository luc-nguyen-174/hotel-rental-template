import React from 'react';

function TopHeader(props) {
    return (
        <div>
            <header className="top-header th-bg" id="top-header-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-7 col-sm-7">
                            <div className="list-inline">
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-5 col-sm-5">
                            <ul className="top-social-media pull-right">
                                <li><a href="#" className="google"><i className="fa fa-google-plus"></i></a></li>
                                <li>
                                    <a href="login.html" className="sign-in"><i className="fa fa-sign-in"></i> Login or Register</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default TopHeader;