import React, { FC, useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useForm } from 'react-hook-form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Inputtext from "../components/input.control";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import useCustomFetch from '../utils/customFetchHook';
import { login } from '../utils/authService';
import AuthContext from '../context/authContext';

//https://www.appsloveworld.com/sample-rest-api-url-for-testing-with-authentication#huserlogin

//Get url from enviornment
const REACT_APP_API_LOGIN = process.env.REACT_APP_API_LOGIN;

const schema = yup.object({
    email: yup.string().required('Email is required.'),
    password: yup.string().required('Password is required.')
});


const Login: FC = () => {
    const { setToken } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema)
    });
    const { resdata, isLoading, error, fetchApiCall } = useCustomFetch(`${REACT_APP_API_LOGIN}login`, 'POST', formdata);
   // const { resdata, isLoading, error, fetchApiCall } = useCustomFetch();    
    const onSubmit = handleSubmit((formdata: any) => {
        const { resdata, isLoading, error, fetchApiCall } = useCustomFetch(`${REACT_APP_API_LOGIN}login`, 'POST', formdata);
            //const response = await fetchApiCall(`${REACT_APP_API_LOGIN}login`, 'POST', formdata);           
            
            console.log("resdata", resdata); 
        // try {
        //     const { resdata, isLoading, error, fetchApiCall } = useCustomFetch(`${REACT_APP_API_LOGIN}login`, 'POST', formdata);
        //     //const response = await fetchApiCall(`${REACT_APP_API_LOGIN}login`, 'POST', formdata);           
            
        //     console.log("resdata", resdata);   
            
        //   } catch (error) {
        //     console.error('Login failed', error);
        // }
        //console.log(formdata);          

    });
    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }
    // if (error) {
    //     return <div>Error: {error}</div>;
    // }
    return (
        <div className="login">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Login Form</Card.Title>
                    
                        <>
                            <form onSubmit={onSubmit}>
                                <Inputtext
                                    label="Email"
                                    type="text"
                                    name="email"
                                    register={register}
                                    errors={errors}
                                />
                                <Inputtext
                                    label="Password"
                                    type="text"
                                    name="password"
                                    register={register}
                                    errors={errors}
                                />
                                <br />
                                <Button
                                    type="submit"
                                    variant="primary">Submit</Button>
                            </form>
                        </>
                   
                </Card.Body>
            </Card>
        </div>
    );
}

export default Login;

