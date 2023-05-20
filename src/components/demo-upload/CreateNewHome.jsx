import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import {getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage';
import {storage} from '../../firebase';
import {ProgressBar, Alert} from "react-bootstrap"
import {useDropzone} from "react-dropzone";


export default function CreateNewHome(props) {
    const [home, setHome] = useState([]);
    const nav = useNavigate();
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

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: handleImageChange,
        accept: ".jpeg, .jpg, .png"
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
                    <div className={'app'}>
                        <Form onSubmit={formik.handleSubmit}>

                            <div className={'input-container'}>
                                <label htmlFor={'name'}>Tên nhà</label>
                                <Field name={'name'}></Field>
                                <ErrorMessage name={'name'}/>
                            </div>

                            <div className={'input-container'}>
                                <label htmlFor={'homeType.id'}>Loại phòng</label>
                                <Field as='select' name={'homeType.id'} id={'homeType'}>
                                    <option>Loại phòng</option>
                                    {homeTypes.map((homeType) => {
                                        return (
                                            <option key={homeType.id}
                                                    value={homeType.id}>{homeType.name}</option>
                                        )
                                    })}
                                </Field>
                                <ErrorMessage name={'homeType'}/>
                            </div>

                            <div className={'input-container'}>
                                <label htmlFor={'address'}>Địa chỉ</label>
                                <Field name={'address'}></Field>
                                <ErrorMessage name={'address'}/>
                            </div>

                            <div className="input-container">
                                <label htmlFor="bedroom">Số lượng phòng ngủ</label>
                                <Field as="select" name="bedroom">
                                    <option>Số phòng ngủ</option>
                                    {[...Array(10)].map((_, index) => (
                                        <option key={index + 1} value={index + 1}>{index + 1}</option>
                                    ))}
                                </Field>
                                <ErrorMessage name="bedroom"/>
                            </div>

                            <div className="input-container">
                                <label htmlFor="bathroom">Số lượng phòng tắm</label>
                                <Field as="select" name="bathroom">
                                    <option>Số phòng tắm</option>
                                    {[...Array(3)].map((_, index) => (
                                        <option key={index + 1} value={index + 1}>{index + 1}</option>
                                    ))}
                                </Field>
                                <ErrorMessage name="bathroom"/>
                            </div>

                            <div className={'input-container'}>
                                <label htmlFor={'description'}>Mô tả</label>
                                <Field as='textarea' name={'description'}></Field>
                                <ErrorMessage name={'description'}/>
                            </div>

                            <div className={'input-container'}>
                                <label htmlFor={'priceByDay'}>Giá tiền</label>
                                <Field type={'number'} name={'priceByDay'}></Field>
                                <ErrorMessage name={'priceByDay'}/>
                            </div>

                            <div>
                                <div {...getRootProps()} className="dropzone">
                                    <input {...getInputProps()} />
                                    {isDragActive ? (
                                        <p>Kéo thả file ảnh vào đây</p>
                                    ) : (
                                        <p>Kéo thả file ảnh hoặc nhấp để chọn</p>
                                    )}
                                </div>
                                {showProgressBar && (
                                    <div>
                                        {progressPercent.map((percent, index) => (
                                            <div key={index} className="innerbar" style={{ width: `${percent}%` }}>
                                                {progressPercent && (
                                                    <ProgressBar key={index} min={0} max={100} now={percent}
                                                                 label={`${percent}%`} />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {imgUrls.length > 0 && (
                                    <div>
                                        <button onClick={openPreviewWindow}>Xem trước</button>
                                    </div>
                                )}
                            </div>


                            <div className={'input-container'}>
                                <label htmlFor="status">Trạng thái nhà</label>
                                <Field as="select" name="status">
                                    <option value="">--Trạng thái--</option>
                                    <option value={1}>Còn trống</option>
                                    <option value={2}>Đã có người thuê</option>
                                    <option value={3}>Đang nâng cấp</option>
                                </Field>
                                <ErrorMessage name="status"/>
                            </div>
                            <div>
                                <button type={'submit'}>
                                    Submit
                                </button>
                            </div>
                        </Form>
                    </div>
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
            Alert('Đã tạo mới nhà.')
        }).catch((err) => {
            console.error(err)
        })
    }
}