import React, { FC, useState, useEffect } from 'react';
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

//Get url from enviornment
const USER_URL = process.env.REACT_APP_API_URL_USER;
console.log("URL", USER_URL);




interface FormValues {
    fname: string;
    lname: string;
    age: number;
};
const schema = yup.object({
    firstName: yup.string().required('First name is required').matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    lastName: yup.string().required('Lastname is required').matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    age: yup.string().required('Gender is required')
});


const Signup: FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema)
    });
    //const { resdata, isLoading, error, fetchApiCall } = useCustomFetch();
    const onSubmit = handleSubmit((formdata: any) => {
        console.log(formdata);
        const { resdata, isLoading, error, fetchApiCall } = useCustomFetch(`${USER_URL}add`, 'POST', formdata);
        //fetchApiCall(`${USER_URL}add`, 'POST', formdata);
        //console.log("Form submitted successfully", resdata);
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
                    <Card.Title>Sign UP Form</Card.Title>
                    <Card.Text>
                        <>
                            <form onSubmit={onSubmit}>
                                <Inputtext
                                    label="First Name"
                                    type="text"
                                    name="firstName"
                                    register={register}
                                    errors={errors}
                                />
                                <Inputtext
                                    label="Last Name"
                                    type="text"
                                    name="lastName"
                                    register={register}
                                    errors={errors}
                                />
                                <Inputtext
                                    label="Age"
                                    type="text"
                                    name="age"
                                    register={register}
                                    errors={errors}
                                />

                                <br />
                                <Button type="submit" variant="primary">Submit</Button>
                            </form>
                        </>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Signup;
