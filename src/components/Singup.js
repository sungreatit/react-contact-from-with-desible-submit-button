/* eslint-disable no-alert */
import { useFormik } from 'formik';
import React from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';

const SignupForm = function SignupForm() {
    // Note that we have to initialize ALL of fields with values. These
    // could come from props, but since we don’t want to prefill this form,
    // we just use an empty string. If we don’t do this, React will yell
    // at us.
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            message: '',
            validateOnMount: true, // button desibel code
        },
        validationSchema: Yup.object().shape({
            firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
            lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
            email: Yup.string().email('Invalid email').required('Required'),
            message: Yup.string().min(10, 'Too Short!').max(500, 'Too Long').required('Required'),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <Container>
            <From onSubmit={formik.handleSubmit}>
                <label htmlFor="firstName">
                    First Name
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <Bage>{formik.errors.firstName}</Bage>
                    ) : null}
                </label>
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                />

                <label htmlFor="lastName">
                    Last Name
                    {formik.touched.lastName && formik.errors.lastName ? (
                        <Bage>{formik.errors.lastName}</Bage>
                    ) : null}
                </label>
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                />

                <label htmlFor="email">
                    Email Address
                    {formik.touched.email && formik.errors.email ? (
                        <Bage>{formik.errors.email}</Bage>
                    ) : null}
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <label htmlFor="message">
                    Message
                    {formik.touched.message && formik.errors.message ? (
                        <Bage>{formik.errors.message}</Bage>
                    ) : null}
                </label>
                <textarea
                    name="message"
                    id="message"
                    onBlur={formik.handleBlur}
                    placeholder="Your message here"
                    onChange={formik.handleChange}
                    value={formik.values.message}
                />

                <button type="submit" disabled={!(formik.isValid && formik.dirty)}>
                    Submit
                </button>
            </From>
        </Container>
    );
};

export default SignupForm;

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Bage = styled.div`
    color: red;
`;

export const From = styled.form`
    width: 450px;
    background-color: black;
    display: flex;
    flex-direction: column;
    padding: 20px 15px;
    margin: auto;
    border-radius: 8px;
    box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000,
        5px 5px 15px 5px rgba(0, 0, 0, 0);
    label {
        color: #fff;
        margin-bottom: 5px;
    }
    input {
        padding: 6px;
        font-size: 17px;
        border-width: 1px;
        border-color: #cccccc;
        background-color: #ffffff;
        color: #000000;
        margin-bottom: 8px;
        border-style: solid;
        border-radius: 9px;
        transition: 0.3s;
        text-shadow: 0px 0px 5px rgba(66, 66, 66, 0.75);
        &:focus {
            outline: none;
            box-shadow: 0px 4px 2px 0px #3bedff;
        }
    }
    textarea {
        max-width: 100%;
        outline: none;
        border-radius: 5px;
        padding: 10px;
        height: 150px;
        text-shadow: 1px 2px 13px #0e1e29;
        font-size: 18px;
    }
    button {
        margin-top: 15px;
        max-width: 100%;
        padding: 10px;
        border-radius: 30px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: 0.3s;
        font-size: 20px;
        &:hover {
            background-color: #05e4fc;
            color: #fff;
        }
    }
`;
