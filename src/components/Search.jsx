import React from 'react';

function Search(props) {
    return (
        <div>
            <div className="search-area sa-show" id="search-area-1">
                <div className="container">
                    <div className="search-area-inner">
                        <div className="search-contents ">
                            <form
                                action="https://storage.googleapis.com/theme-vessel-items/checking-sites/xero-2-html/HTML/main/index.html"
                                method="GET">
                                <div className="row">
                                    <div className="col-6 col-lg-3 col-md-6">
                                        <div className="form-group">
                                            <select className="selectpicker search-fields" name="area">
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
                                    <div className="col-6 col-lg-3 col-md-6">
                                        <div className="form-group">
                                            <select className="selectpicker search-fields" name="property-status">
                                                <option>Property Status</option>
                                                <option>For Sale</option>
                                                <option>For Rent</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-6 col-lg-3 col-md-6">
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
                                    <div className="col-6 col-lg-3 col-md-6">
                                        <div className="form-group">
                                            <select className="selectpicker search-fields" name="category">
                                                <option>Property Types</option>
                                                <option>Residential</option>
                                                <option>Commercial</option>
                                                <option>Land</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-6 col-lg-3 col-md-6">
                                        <div className="form-group">
                                            <select className="selectpicker search-fields" name="bedrooms">
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
                                    <div className="col-6 col-lg-3 col-md-6">
                                        <div className="form-group">
                                            <select className="selectpicker search-fields" name="bathrooms">
                                                <option>Bathrooms</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-6 col-lg-3 col-md-6">
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
        </div>
    );
}

export default Search;