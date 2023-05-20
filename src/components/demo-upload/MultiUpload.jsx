import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Field, Form, Formik} from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import {getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage';
import {storage} from '../../firebase';

export default function CreateProduct() {
    const nav = useNavigate();
    const validationSchema = yup.object().shape({
        name: yup.string().required('required'),
        images: yup.object().required('required'),
    });
    const [imgUrls, setImgUrls] = useState([]);
    const [progressPercent, setProgressPercent] = useState([]);
    const handleImageChange = async (e) => {
        e.preventDefault();
        const files = Array.from(e.target.files);

        if (files.length === 0) {
            return
        }

        files.forEach((file) => {
            const storageRef = ref(storage, `files/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            if (!isFileValid(file)) {
                alert('Only JPEG and PNG files are allowed.');
                return;
            }

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
        });
    };

    const isFileValid = (file) => {
        const allowedExtensions = ['jpeg', 'jpg', 'png'];
        const fileExtension = file.name.split('.').pop().toLowerCase();
        return allowedExtensions.includes(fileExtension);
    };
    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                    images: [],
                }}
                validateSchema={validationSchema}
                onSubmit={(values) => {
                    saveHome(values);
                }}
                enableReinitialize={true}
            >
                {({
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                  }) => (
                    <div className={'app'}>
                        {/*{check && <p>New product create</p>}*/}
                        <Form>
                            <div className={"input-container"}>
                                <label htmlFor={'name'}>Name</label>
                                <Field name={'name'} onChange={handleChange} onBlur={handleBlur}></Field>
                                {errors.name && touched.name ? (<div>{errors.name}</div>) : null}
                            </div>

                            <div>
                                <label htmlFor={'images'}>Ảnh</label>
                                <input type={'file'} name={'images'} multiple onChange={handleImageChange}/>

                                {imgUrls.length > 0 &&
                                    imgUrls.map((url, index) => (
                                        <img key={index} src={url} alt="uploaded file" height={200}/>
                                    ))}
                                <div>
                                    {progressPercent.map((percent, index) => (
                                        <div key={index} className="innerbar" style={{width: `${percent}%`}}>
                                            {percent}%
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <button type={"submit"}>
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
        let imgArr =[];
        for (let i = 0; i < imgUrls.length; i++) {
            imgArr[i] = imgUrls[i];
        }

        data.images = imgArr;
        axios.post('http://localhost:8080/customers/create', data).then(() => {
            alert('successfully')
        }).catch((err) => {
            console.error(err);
        })
    }


}