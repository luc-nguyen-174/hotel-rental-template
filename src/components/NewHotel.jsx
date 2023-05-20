import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import {getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage';
import {storage} from '../firebase';
import {useDropzone} from 'react-dropzone';
import Footer from "./footer/Footer";

export default function CreateNewHotel(props) {
    // const nav = useNavigate();
    const [imgUrls, setImgUrls] = useState([]);
    const [progressPercent, setProgressPercent] = useState([]);
    const [homeTypes, setHomeTypes] = useState([]);
    const [showProgressBar, setShowProgressBar] = useState(true);

    const validationSchema = yup.object().shape({
        name: yup.string().required('Không được để trống.'),
        address: yup.string().required('Không được để trống.'),
        bathroom: yup
            .number()
            .min(1, 'Ít nhất phải có 1 phòng tắm.')
            .max(3, 'Nhà bạn nhiều phòng tắm thế, chỉ cần 3 phòng tắm thôi.')
            .required('Vui lòng nhập số lượng tắm.'),
        bedroom: yup
            .number()
            .min(1, 'Ít nhất phải có 1 phòng ngủ')
            .max(10, 'Nhà bạn nhiều phòng ngủ thế, chỉ cần 10 phòng ngủ thôi.')
            .required('Vui lòng nhập số lượng phòng ngủ.'),
        description: yup.string().nullable(true).default(null),
        priceByDay: yup
            .number()
            .required('Vui lòng nhập giá.')
            .positive('Vui lòng nhập giá nhà là số dương.'),
        status: yup.number().required('Vui lòng chọn trạng thái nhà.'),
        homeType: yup.number().required('Vui lòng chọn kiểu phòng.'),
    });
    const initialValue = {
        name: '',
        address: '',
        bathroom: '',
        bedroom: '',
        description: '',
        priceByDay: '',
        image: [],
        status: '',
        homeType: {
            id: ''
        },
    };

    useEffect(() => {
        const getHomeType = async () => {
            try {
                const res = await axios.get('http://localhost:8080/user/hometypes/');
                setHomeTypes(res.data);
            } catch (error) {
                console.log(error.message);
            }
        };
        getHomeType();
    }, []);

    useEffect(() => {
        // Ẩn thanh tiến trình sau khi tải xong ảnh
        if (imgUrls.length > 0) {
            setShowProgressBar(false);
        }
    }, [imgUrls]);

    const handleImageChange = async (acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            if (!isFileValid(file)) {
                alert('Chỉ được chọn file định dạng ảnh JPG/JPEG/PNG.');
            } else {
                const storageRef = ref(storage, `files/${file.name}`);
                const uploadTask = uploadBytesResumable(storageRef, file);
                uploadTask.on(
                    'state_changed',
                    (snapshot) => {
                        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                        setProgressPercent((prevPercent) => [...prevPercent, progress]);
                    },
                    (error) => {
                        alert(error);
                    },
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                            setImgUrls((prevUrls) => [...prevUrls, downloadURL]);
                        });
                    }
                );
            }
        });
    };

    const isFileValid = (file) => {
        const allowedExtensions = ['jpeg', 'jpg', 'png'];
        const fileExtension = file.name.split('.').pop().toLowerCase();
        return allowedExtensions.includes(fileExtension);
    };
    const openPreviewWindow = () => {
        // Tạo cửa sổ mới hoặc pop-up
        const previewWindow = window.open('', '_blank', 'width=800,height=600');

        // Tạo nội dung HTML cho cửa sổ xem trước
        const previewContent = imgUrls
            .map((url, index) => `<img key=${index} src=${url} alt="uploaded file" height={200}/>`)
            .join('');

        // Gán nội dung HTML cho cửa sổ xem trước
        previewWindow.document.body.innerHTML = previewContent;
    };

    const {getRootProps, getInputProps, isDragActive, fileRejections} = useDropzone({
        accept: "image/jpeg, image/png" ,
        multiple: true,
        onDrop: handleImageChange,
        onDropRejected: (fileRejections) => {
            // Xử lý khi có file bị từ chối
            if (fileRejections && fileRejections.length > 0) {
                const nonImageFiles = fileRejections.map((fileRejection) => fileRejection.file.name).join(', ');
                alert(`Cảnh báo: Các file sau đây không phải là file ảnh: ${nonImageFiles}`);
            }
        },
    });

    return (
        <div>
            <Formik
                initialValues={initialValue}
                // validationSchema={validationSchema}
                onSubmit={(values) => {
                    saveHome(values)
                }}
                enableReinitialize={true}
            >
                {formik => (
                    <>

                        {/* Top header start */}
                        <header className="top-header th-bg" id="top-header-2">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-9 col-md-9 col-sm-7">
                                        <div className="list-inline">
                                            <a href="tel:1-7X0-555-8X22"><i className="fa fa-phone"></i>+0477 85X6
                                                552</a>
                                            <a href="tel:info@themevessel.com"><i className="fa fa-envelope"></i>info@themevessel.com</a>
                                            <a href="#" className="mr-0 d-none-992"><i className="fa fa-clock-o"></i>Mon
                                                - Sun: 8:00am - 6:00pm</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-5">
                                        <ul className="top-social-media pull-right">
                                            <li>
                                                <a href="login.html" className="sign-in"><i
                                                    className="fa fa-sign-in"></i> Login </a>
                                            </li>
                                            <li>
                                                <a href="login.html" className="sign-in"><i
                                                    className="fa fa-user"></i> Register</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </header>
                        {/* Top header end */}

                        {/* main header start */}
                        <header className="main-header sticky-header" id="main-header-2">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <nav className="navbar navbar-expand-lg navbar-light rounded">
                                            <a className="navbar-brand logo" href="index.html">
                                                <img src="assets/img/logos/black-logo.png" alt="logo"/>
                                            </a>

                                            <button className="navbar-toggler" type={'button'} onClick={() => {
                                                const sidebar = document.getElementById('sidebar');
                                                const overlay = document.getElementsByClassName('overlay')[0];
                                                const collapseItems = document.getElementsByClassName('collapse in');
                                                const expandedLinks = document.querySelectorAll('a[aria-expanded="true"]');

                                                sidebar.classList.add('active');
                                                overlay.classList.add('active');

                                                while (collapseItems.length) {
                                                    collapseItems[0].classList.remove('in');
                                                }

                                                expandedLinks.forEach(function (link) {
                                                    link.setAttribute('aria-expanded', 'false');
                                                });
                                            }} id="drawer">
                                                <span className="fa fa-bars"></span>
                                            </button>

                                            <div className="collapse navbar-collapse" id="navbar">
                                                <ul className="navbar-nav justify-content-end ml-auto">
                                                    <li className="nav-item dropdown">
                                                        <a className="nav-link dropdown-toggle" href="#"
                                                           id="navbarDropdownMenuLink"
                                                           data-toggle="dropdown" aria-haspopup="true"
                                                           aria-expanded="false">
                                                            Index
                                                        </a>
                                                        <ul className="dropdown-menu"
                                                            aria-labelledby="navbarDropdownMenuLink">
                                                            <li><a className="dropdown-item" href="index.html">Index
                                                                1</a></li>
                                                            <li><a className="dropdown-item" href="index-2.html">Index
                                                                2</a></li>
                                                            <li><a className="dropdown-item" href="index-3.html">Index
                                                                3</a></li>
                                                            <li><a className="dropdown-item" href="index-4.html">Index
                                                                4</a></li>
                                                            <li><a className="dropdown-item" href="index-5.html">Index
                                                                5</a></li>
                                                            <li><a className="dropdown-item" href="index-6.html">Index
                                                                6</a></li>
                                                            <li><a className="dropdown-item" href="index-7.html">Index
                                                                7</a></li>
                                                            <li><a className="dropdown-item" href="index-8.html">Index 8
                                                                (Map)</a></li>
                                                            <li><a className="dropdown-item" href="index-9.html">Index 9
                                                                (Video)</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-item dropdown">
                                                        <a className="nav-link dropdown-toggle" href="#"
                                                           id="navbarDropdownMenuLink2"
                                                           data-toggle="dropdown" aria-haspopup="true"
                                                           aria-expanded="false">
                                                            Properties
                                                        </a>
                                                        <ul className="dropdown-menu"
                                                            aria-labelledby="navbarDropdownMenuLink">
                                                            <li className="dropdown-submenu"><a
                                                                className="dropdown-item dropdown-toggle" href="#">List
                                                                Layout</a>
                                                                <ul className="dropdown-menu">
                                                                    <li><a className="dropdown-item"
                                                                           href="properties-list-rightside.html">Right
                                                                        Sidebar</a></li>
                                                                    <li><a className="dropdown-item"
                                                                           href="properties-list-leftside.html">Left
                                                                        Sidebar</a></li>
                                                                    <li><a className="dropdown-item"
                                                                           href="properties-list-fullwidth.html">Fullwidth</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu"><a
                                                                className="dropdown-item dropdown-toggle" href="#">Grid
                                                                Layout</a>
                                                                <ul className="dropdown-menu">
                                                                    <li><a className="dropdown-item"
                                                                           href="properties-grid-rightside.html">Right
                                                                        Sidebar</a></li>
                                                                    <li><a className="dropdown-item"
                                                                           href="properties-grid-leftside.html">Left
                                                                        Sidebar</a></li>
                                                                    <li><a className="dropdown-item"
                                                                           href="properties-grid-fullwidth.html">Fullwidth</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu"><a
                                                                className="dropdown-item dropdown-toggle" href="#">Map
                                                                View</a>
                                                                <ul className="dropdown-menu">
                                                                    <li><a className="dropdown-item"
                                                                           href="properties-map-rightside-list.html">Map
                                                                        List Right Sidebar</a></li>
                                                                    <li><a className="dropdown-item"
                                                                           href="properties-map-leftside-list.html">Map
                                                                        List Left Sidebar</a></li>
                                                                    <li><a className="dropdown-item"
                                                                           href="properties-map-rightside-grid.html">Map
                                                                        Grid Right Sidebar</a></li>
                                                                    <li><a className="dropdown-item"
                                                                           href="properties-map-leftside-grid.html">Map
                                                                        Grid Left Sidebar</a></li>
                                                                    <li><a className="dropdown-item"
                                                                           href="properties-map-full.html">Map
                                                                        FullWidth</a></li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu"><a
                                                                className="dropdown-item dropdown-toggle" href="#">Property
                                                                Detail</a>
                                                                <ul className="dropdown-menu">
                                                                    <li><a className="dropdown-item"
                                                                           href="properties-details.html">Property
                                                                        Detail
                                                                        1</a></li>
                                                                    <li><a className="dropdown-item"
                                                                           href="properties-details-2.html">Property
                                                                        Detail 2</a></li>
                                                                    <li><a className="dropdown-item"
                                                                           href="properties-details-3.html">Property
                                                                        Detail 3</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-item dropdown">
                                                        <a className="nav-link dropdown-toggle" href="#"
                                                           id="navbarDropdownMenuLink7"
                                                           data-toggle="dropdown" aria-haspopup="true"
                                                           aria-expanded="false">
                                                            Pages
                                                        </a>
                                                        <ul className="dropdown-menu"
                                                            aria-labelledby="navbarDropdownMenuLink">
                                                            <li className="dropdown-submenu"><a
                                                                className="dropdown-item dropdown-toggle" href="#">My
                                                                Account</a>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <a className="dropdown-item"
                                                                           href="user-profile.html">User profile</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item"
                                                                           href="my-properties.html">My Properties</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item"
                                                                           href="favorited-properties.html">Favorited
                                                                            Properties</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item"
                                                                           href="submit-property.html">Submit
                                                                            Property</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu"><a
                                                                className="dropdown-item dropdown-toggle"
                                                                href="#">About</a>
                                                                <ul className="dropdown-menu">
                                                                    <li><a className="dropdown-item" href="about.html">About
                                                                        Us</a></li>
                                                                    <li><a className="dropdown-item"
                                                                           href="about-me.html">About Me</a></li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu"><a
                                                                className="dropdown-item dropdown-toggle"
                                                                href="#">Services</a>
                                                                <ul className="dropdown-menu">
                                                                    <li><a className="dropdown-item"
                                                                           href="services.html">Services 1</a></li>
                                                                    <li><a className="dropdown-item"
                                                                           href="services-2.html">Services 2</a></li>
                                                                    <li><a className="dropdown-item"
                                                                           href="services-details.html">Services
                                                                        Details</a></li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu"><a
                                                                className="dropdown-item dropdown-toggle" href="#">Pricing
                                                                Tables</a>
                                                                <ul className="dropdown-menu">
                                                                    <li><a className="dropdown-item"
                                                                           href="pricing-tables-1.html">Pricing Tables
                                                                        1</a></li>
                                                                    <li><a className="dropdown-item"
                                                                           href="pricing-tables-2.html">Pricing Tables
                                                                        2</a></li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu"><a
                                                                className="dropdown-item dropdown-toggle"
                                                                href="#">Gallery</a>
                                                                <ul className="dropdown-menu">
                                                                    <li><a className="dropdown-item"
                                                                           href="gallery-1.html">Gallery 1</a></li>
                                                                    <li><a className="dropdown-item"
                                                                           href="gallery-2.html">Gallery 2</a></li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu"><a
                                                                className="dropdown-item dropdown-toggle"
                                                                href="#">Faq</a>
                                                                <ul className="dropdown-menu">
                                                                    <li><a className="dropdown-item" href="faq-1.html">Faq
                                                                        1</a></li>
                                                                    <li><a className="dropdown-item" href="faq-2.html">Faq
                                                                        2</a></li>
                                                                </ul>
                                                            </li>

                                                            <li className="dropdown-submenu"><a
                                                                className="dropdown-item dropdown-toggle"
                                                                href="#">Typography</a>
                                                                <ul className="dropdown-menu">
                                                                    <li><a className="dropdown-item"
                                                                           href="typography.html">Typography 1</a></li>
                                                                    <li><a className="dropdown-item"
                                                                           href="typography-2.html">Typography 2</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu"><a
                                                                className="dropdown-item dropdown-toggle" href="#">404
                                                                Error</a>
                                                                <ul className="dropdown-menu">
                                                                    <li><a className="dropdown-item"
                                                                           href="pages-404.html">404 Error 1</a></li>
                                                                    <li><a className="dropdown-item"
                                                                           href="pages-404-2.html">404 Error 2</a></li>
                                                                </ul>
                                                            </li>

                                                            <li><a className="dropdown-item"
                                                                   href="properties-comparison.html">Properties
                                                                Comparison</a></li>
                                                            <li><a className="dropdown-item" href="search-brand.html">Search
                                                                Brand</a></li>
                                                            <li><a className="dropdown-item"
                                                                   href="elements.html">Elements</a></li>
                                                            <li><a className="dropdown-item" href="coming-soon.html">Coming
                                                                Soon</a></li>
                                                            <li><a className="dropdown-item"
                                                                   href="login.html">Login/Register</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-item dropdown">
                                                        <a className="nav-link dropdown-toggle" href="#"
                                                           id="navbarDropdownMenuLink6"
                                                           data-toggle="dropdown" aria-haspopup="true"
                                                           aria-expanded="false">
                                                            Agents
                                                        </a>
                                                        <ul className="dropdown-menu"
                                                            aria-labelledby="navbarDropdownMenuLink">
                                                            <li className="dropdown-submenu"><a
                                                                className="dropdown-item dropdown-toggle" href="#">Agent
                                                                List</a>
                                                                <ul className="dropdown-menu">
                                                                    <li><a className="dropdown-item"
                                                                           href="agent-list.html">Agent List 1</a></li>
                                                                    <li><a className="dropdown-item"
                                                                           href="agent-list-2.html">Agent List 2</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu"><a
                                                                className="dropdown-item dropdown-toggle" href="#">Agent
                                                                Grid</a>
                                                                <ul className="dropdown-menu">
                                                                    <li><a className="dropdown-item"
                                                                           href="agent-grid.html">Agent Grid 1</a></li>
                                                                    <li><a className="dropdown-item"
                                                                           href="agent-grid-2.html">Agent Grid 2</a>
                                                                    </li>
                                                                    <li><a className="dropdown-item"
                                                                           href="agent-grid-3.html">Agent Grid 3</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li><a className="dropdown-item" href="agent-detail.html">Agent
                                                                Detail</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-item dropdown">
                                                        <a className="nav-link dropdown-toggle" href="#"
                                                           id="navbarDropdownMenuLink5"
                                                           data-toggle="dropdown" aria-haspopup="true"
                                                           aria-expanded="false">
                                                            Blog
                                                        </a>
                                                        <ul className="dropdown-menu"
                                                            aria-labelledby="navbarDropdownMenuLink">
                                                            <li className="dropdown-submenu"><a
                                                                className="dropdown-item dropdown-toggle"
                                                                href="#">Columns</a>
                                                                <ul className="dropdown-menu">
                                                                    <li><a className="dropdown-item"
                                                                           href="blog-columns-2col.html">2 Columns</a>
                                                                    </li>
                                                                    <li><a className="dropdown-item"
                                                                           href="blog-columns-3col.html">3 Columns</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu"><a
                                                                className="dropdown-item dropdown-toggle"
                                                                href="#">Classic</a>
                                                                <ul className="dropdown-menu">
                                                                    <li><a className="dropdown-item"
                                                                           href="blog-classic-sidebar-right.html">Right
                                                                        Sidebar</a></li>
                                                                    <li><a className="dropdown-item"
                                                                           href="blog-classic-sidebar-left.html">Left
                                                                        Sidebar</a></li>
                                                                    <li><a className="dropdown-item"
                                                                           href="blog-classic-fullwidth.html">FullWidth</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu"><a
                                                                className="dropdown-item dropdown-toggle" href="#">Blog
                                                                Details</a>
                                                                <ul className="dropdown-menu">
                                                                    <li><a className="dropdown-item"
                                                                           href="blog-single-sidebar-right.html">Right
                                                                        Sidebar</a></li>
                                                                    <li><a className="dropdown-item"
                                                                           href="blog-single-sidebar-left.html">Left
                                                                        Sidebar</a></li>
                                                                    <li><a className="dropdown-item"
                                                                           href="blog-single-fullwidth.html">Fullwidth</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-item dropdown">
                                                        <a className="nav-link dropdown-toggle" href="#"
                                                           id="navbarDropdown4" role="button"
                                                           data-toggle="dropdown" aria-haspopup="true"
                                                           aria-expanded="false">
                                                            Shop
                                                        </a>
                                                        <div className="dropdown-menu"
                                                             aria-labelledby="navbarDropdown3">
                                                            <a className="dropdown-item" href="shop-list.html">Shop
                                                                List</a>
                                                            <a className="dropdown-item" href="shop-cart.html">Shop
                                                                Cart</a>
                                                            <a className="dropdown-item" href="shop-checkout.html">Shop
                                                                Checkout</a>
                                                            <a className="dropdown-item" href="shop-single.html">Shop
                                                                Details</a>
                                                        </div>
                                                    </li>
                                                    <li className="nav-item dropdown">
                                                        <a className="nav-link dropdown-toggle" href="#"
                                                           id="navbarDropdown3" role="button"
                                                           data-toggle="dropdown" aria-haspopup="true"
                                                           aria-expanded="false">
                                                            Contact
                                                        </a>
                                                        <div className="dropdown-menu"
                                                             aria-labelledby="navbarDropdown3">
                                                            <a className="dropdown-item" href="contact-1.html">Contact
                                                                1</a>
                                                            <a className="dropdown-item" href="contact-2.html">Contact
                                                                2</a>
                                                            <a className="dropdown-item" href="contact-3.html">Contact
                                                                3</a>
                                                        </div>
                                                    </li>
                                                    <li className="nav-item sb2">
                                                        <a href="submit-property.html" className="submit-btn">
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
                                        <li><a href="#" className="pt0">Index <em
                                            className="fa fa-chevron-down"></em></a>
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
                                                        <li><a href="properties-list-rightside.html">Right Sidebar</a>
                                                        </li>
                                                        <li><a href="properties-list-leftside.html">Left Sidebar</a>
                                                        </li>
                                                        <li><a href="properties-list-fullwidth.html">Fullwidth</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">Grid Layout <em className="fa fa-chevron-down"></em></a>
                                                    <ul>
                                                        <li><a href="properties-grid-rightside.html">Right Sidebar</a>
                                                        </li>
                                                        <li><a href="properties-grid-leftside.html">Left Sidebar</a>
                                                        </li>
                                                        <li><a href="properties-grid-fullwidth.html">Fullwidth</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">Map View <em className="fa fa-chevron-down"></em></a>
                                                    <ul>
                                                        <li><a href="properties-map-rightside-list.html">Map List Right
                                                            Sidebar</a></li>
                                                        <li><a href="properties-map-leftside-list.html">Map List Left
                                                            Sidebar</a></li>
                                                        <li><a href="properties-map-rightside-grid.html">Map Grid Right
                                                            Sidebar</a></li>
                                                        <li><a href="properties-map-leftside-grid.html">Map Grid Left
                                                            Sidebar</a></li>
                                                        <li><a href="properties-map-full.html">Map FullWidth</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">Property Detail <em className="fa fa-chevron-down"></em></a>
                                                    <ul>
                                                        <li><a href="properties-details.html">Property Detail 1</a></li>
                                                        <li><a href="properties-details-2.html">Property Detail 2</a>
                                                        </li>
                                                        <li><a href="properties-details-3.html">Property Detail 3</a>
                                                        </li>
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
                                                        <li><a href="favorited-properties.html">Favorited Properties</a>
                                                        </li>
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
                                                    <a href="#">Classic <em className="fa fa-chevron-down"></em></a>
                                                    <ul>
                                                        <li><a href="blog-classic-sidebar-right.html">Right Sidebar</a>
                                                        </li>
                                                        <li><a href="blog-classic-sidebar-left.html">Left Sidebar</a>
                                                        </li>
                                                        <li><a href="blog-classic-fullwidth.html">FullWidth</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">Blog Details <em
                                                        className="fa fa-chevron-down"></em></a>
                                                    <ul>
                                                        <li><a href="blog-single-sidebar-right.html">Right Sidebar</a>
                                                        </li>
                                                        <li><a href="blog-single-sidebar-left.html">Left Sidebar</a>
                                                        </li>
                                                        <li><a href="blog-single-fullwidth.html">Fullwidth</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Shop <em className="fa fa-chevron-down"></em></a>
                                            <ul>

                                                <li><a className="dropdown-item" href="shop-list.html">Shop List</a>
                                                </li>
                                                <li><a className="dropdown-item" href="shop-cart.html">Shop Cart</a>
                                                </li>
                                                <li><a className="dropdown-item" href="shop-checkout.html">Shop
                                                    Checkout</a></li>
                                                <li><a className="dropdown-item" href="shop-single.html">Shop
                                                    Details</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Contact <em className="fa fa-chevron-down"></em></a>
                                            <ul>
                                                <li><a className="dropdown-item" href="contact-1.html">Contact 1</a>
                                                </li>
                                                <li><a className="dropdown-item" href="contact-2.html">Contact 2</a>
                                                </li>
                                                <li><a className="dropdown-item" href="contact-3.html">Contact 3</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="submit-property.html" className="active">Submit Property</a>
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

                        {/* Sub banner start */}
                        <div className="sub-banner">
                            <div className="container">
                                <div className="breadcrumb-area">
                                    <h1>Submit Property</h1>
                                    <ul className="breadcrumbs">
                                        <li><a href="index.html">Home</a></li>
                                        <li className="active">Submit Property</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Sub banner end */}

                        {/* User page start */}
                        <div className="user-page submit-property content-area-7">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="notification-box mb-50">
                                            <h4>Don't Have an Account?</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been
                                                the industry's standard dummy text ever since the 1500s, when an unknown
                                                printer took a galley
                                                of type and scrambled it to make a type specimen book. It has survived
                                                not only five
                                                centuries.But also the leap into electronic typesetting, remaining
                                                essentially unchanged. It was
                                                popularised in the 1960s with the release of Letraset sheets
                                                containing</p>
                                        </div>

                                        <div className="search-area contact-2">
                                            <div className="search-area-inner">
                                                <div className="search-contents ">
                                                    <form method="GET">
                                                        <h3 className="heading-3">Basic Information</h3>
                                                        <div className="row mb-30">

                                                            <div className="col-lg-4 col-md-6">
                                                                <div className="form-group">
                                                                    <label>Property Title</label>
                                                                    <input type="text" name="property-title"
                                                                           className="form-control"
                                                                           placeholder="Property Title"/>
                                                                </div>
                                                            </div>

                                                            <div className="col-lg-4 col-md-6">
                                                                <div className="form-group">
                                                                    <label>Type</label>
                                                                    <select className="selectpicker search-fields"
                                                                            name="Status">
                                                                        <option>Apartment</option>
                                                                        <option>House</option>
                                                                        <option>Commercial</option>
                                                                        <option>Garage</option>
                                                                        <option>Lot</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div className="col-lg-4 col-md-6">
                                                                <div className="form-group">
                                                                    <label>Price</label>
                                                                    <input type="text" name="price"
                                                                           className="form-control" placeholder="USD"/>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 col-md-6">
                                                                <div className="form-group">
                                                                    <label>Area/Location</label>
                                                                    <input type="text" name="price"
                                                                           className="form-control" placeholder="SqFt"/>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 col-md-6">
                                                                <div className="form-group">
                                                                    <label>Bedrooms</label>
                                                                    <select className="selectpicker search-fields"
                                                                            name="Status">
                                                                        <option>1</option>
                                                                        <option>2</option>
                                                                        <option>3</option>
                                                                        <option>4</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 col-md-6">
                                                                <div className="form-group">
                                                                    <label>Bathroom</label>
                                                                    <select className="selectpicker search-fields"
                                                                            name="Status">
                                                                        <option>1</option>
                                                                        <option>2</option>
                                                                        <option>3</option>
                                                                        <option>4</option>
                                                                        <option>5</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h3 className="heading-3">Property Gallery</h3>
                                                        <div className="row mb-45">
                                                            <div className="col-lg-12">
                                                                <div id="myDropZone"
                                                                     className="dropzone dropzone-design">
                                                                    <div className="dz-default dz-message"><span>Drop files here to upload</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h3 className="heading-3">Location</h3>
                                                        <div className="row mb-30">
                                                            <div className="col-lg-6 col-md-6">
                                                                <div className="form-group">
                                                                    <label>Address</label>
                                                                    <input type="text" name="address"
                                                                           className="form-control"
                                                                           placeholder="Address"/>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6">
                                                                <div className="form-group">
                                                                    <label>City</label>
                                                                    <select className="selectpicker search-fields"
                                                                            name="Status">
                                                                        <option>Choose City</option>
                                                                        <option>New York</option>
                                                                        <option>Chicago</option>
                                                                        <option>Queens</option>
                                                                        <option>Manhattan</option>
                                                                        <option>San Antonio</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6">
                                                                <div className="form-group">
                                                                    <label>State</label>
                                                                    <select className="selectpicker search-fields"
                                                                            name="Status">
                                                                        <option>Choose State</option>
                                                                        <option>Alabama</option>
                                                                        <option>California</option>
                                                                        <option>Connecticut</option>
                                                                        <option>Florida</option>
                                                                        <option>Georgia</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6">
                                                                <div className="form-group">
                                                                    <label>Postal Code</label>
                                                                    <input type="text" name="postal-code"
                                                                           className="form-control"
                                                                           placeholder="Postal Code"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h3 className="heading-3">Detailed Information</h3>
                                                        <div className="row mb-30">
                                                            <div className="col-lg-12">
                                                                <div className="form-group message">
                                                                    <label>Detailed Information</label>
                                                                    <textarea className="form-control" name="message"
                                                                              placeholder="Detailed Information"></textarea>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 col-md-4">
                                                                <div className="form-group">
                                                                    <label>Building Age (optional)</label>
                                                                    <select className="selectpicker search-fields"
                                                                            name="Status">
                                                                        <option>0-5 Years</option>
                                                                        <option>0-10 Years</option>
                                                                        <option>0-15 Years</option>
                                                                        <option>0-20 Years</option>
                                                                        <option>0-25 Years</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 col-md-4">
                                                                <div className="form-group">
                                                                    <label>Bedrooms (optional)</label>
                                                                    <select className="selectpicker search-fields"
                                                                            name="Status">
                                                                        <option>1</option>
                                                                        <option>2</option>
                                                                        <option>3</option>
                                                                        <option>4</option>
                                                                        <option>5</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 col-md-4">
                                                                <div className="form-group">
                                                                    <label>Bathrooms (optional)</label>
                                                                    <select className="selectpicker search-fields"
                                                                            name="Status">
                                                                        <option>1</option>
                                                                        <option>2</option>
                                                                        <option>3</option>
                                                                        <option>4</option>
                                                                        <option>5</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h3 className="heading-3">Features (optional)</h3>
                                                        <div className="row mb-30">
                                                            <div className="col-lg-4 col-md-4">
                                                                <div className="form-group">
                                                                    <div className="form-check checkbox-theme">
                                                                        <input className="form-check-input"
                                                                               type="checkbox" value=""
                                                                               id="air-condition"/>
                                                                            <label className="form-check-label"
                                                                                   htmlFor="air-condition">
                                                                                Air Condition
                                                                            </label>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="form-check checkbox-theme">
                                                                        <input className="form-check-input"
                                                                               type="checkbox" value=""
                                                                               id="free-parking"/>
                                                                            <label className="form-check-label"
                                                                                   htmlFor="free-parking">
                                                                                Free Parking
                                                                            </label>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="form-check checkbox-theme">
                                                                        <input className="form-check-input"
                                                                               type="checkbox" value=""
                                                                               id="swimming-pool"/>
                                                                            <label className="form-check-label"
                                                                                   htmlFor="swimming-pool">
                                                                                Swimming Pool
                                                                            </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 col-md-4">
                                                                <div className="form-group">
                                                                    <div className="form-check checkbox-theme">
                                                                        <input className="form-check-input"
                                                                               type="checkbox" value=""
                                                                               id="laundry-room"/>
                                                                            <label className="form-check-label"
                                                                                   htmlFor="laundry-room">
                                                                                Laundry Room
                                                                            </label>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="form-check checkbox-theme">
                                                                        <input className="form-check-input"
                                                                               type="checkbox" value=""
                                                                               id="window-covering"/>
                                                                            <label className="form-check-label"
                                                                                   htmlFor="window-covering">
                                                                                Window Covering
                                                                            </label>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="form-check checkbox-theme">
                                                                        <input className="form-check-input"
                                                                               type="checkbox" value="" id="places"/>
                                                                            <label className="form-check-label"
                                                                                   htmlFor="places">
                                                                                Places to seat
                                                                            </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 col-md-4">
                                                                <div className="form-group">
                                                                    <div className="form-check checkbox-theme">
                                                                        <input className="form-check-input"
                                                                               type="checkbox" value="" id="alarm"/>
                                                                            <label className="form-check-label"
                                                                                   htmlFor="alarm">
                                                                                Alarm
                                                                            </label>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="form-check checkbox-theme">
                                                                        <input className="form-check-input"
                                                                               type="checkbox" value=""
                                                                               id="central-heating"/>
                                                                            <label className="form-check-label"
                                                                                   htmlFor="central-heating">
                                                                                Central Heating
                                                                            </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <h3 className="heading-3">Contact Details</h3>
                                                        <div className="row">
                                                            <div className="col-lg-4 col-md-4">
                                                                <div className="form-group">
                                                                    <label>Name</label>
                                                                    <input type="text" name="name"
                                                                           className="form-control" placeholder="Name"/>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 col-md-4">
                                                                <div className="form-group">
                                                                    <label>Email</label>
                                                                    <input type="email" name="email"
                                                                           className="form-control" placeholder="Email"/>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 col-md-4">
                                                                <div className="form-group">
                                                                    <label>Phone</label>
                                                                    <input type="text" name="name"
                                                                           className="form-control" placeholder="Phone"/>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <a href="#" className="btn btn-4">Preview</a>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* User page end */}

                        {/* Footer start */}
                        <Footer/>
                        {/* Footer end */}
                    </>
                )}
            </Formik>
        </div>
    );

    function saveHome(data) {
        console.log(data)
        let imgArr = [];
        for (let i = 0; i < imgUrls.length; i++) {
            imgArr[i] = imgUrls[i];
        }
        data.image = imgArr;
        axios.post('http://localhost:8080/homes/create', data).then(() => {
            alert('Đã tạo mới nhà.')
        }).catch((err) => {
            console.error(err)
        })
    }
}