import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';

export default function LoginContent() {
    const [validated, setValidated] = useState(false);
    const naviagte = useNavigate();

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }
        else {
            event.preventDefault();
            event.stopPropagation();
            naviagte('/home');
        }

        setValidated(true);
    };

    return (
        <div className='login-content'>
            <h2 className='text-center mb-4'>Welcome to Newson</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <div className='mb-3 mt-3'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        name='login-email'
                        placeholder='Enter Email Address'
                        required
                        />
                    <Form.Control.Feedback type="invalid">
                        Invalid Email.
                    </Form.Control.Feedback>
                </div>
                <div className='mb-3'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        name='login-pass'
                        placeholder='Enter Password'
                        required
                        />
                    <Form.Control.Feedback type="invalid">
                        Invalid password.
                    </Form.Control.Feedback>
                    <div className='text-end mt-2'>
                        <NavLink to={'/forgot-pass'} className='colored-link'>Forgot Password?</NavLink>
                    </div>
                </div>
                <Button type='submit' variant='primary w-100'>
                    Login
                </Button>
                <p className='mt-3 text-center'>Don't have an account? 
                    <NavLink to={'/signup'} className='colored-link'> Signup</NavLink>
                </p>
            </Form>
        </div>
    )
}
