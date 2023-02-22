import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';

export default function SignupContent() {
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
            naviagte('/login');
        }

        setValidated(true);
    };

    return (
        <div className='signup-content pt-5 pb-5'>
            <h2 className='text-center mb-4'>Create Account</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <div className='mb-3 mt-3'>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type='text'
                        name='signup-fname'
                        placeholder='Enter First Name'
                        required
                        />
                    <Form.Control.Feedback type="invalid">
                        Invalid First Name.
                    </Form.Control.Feedback>
                </div>
                <div className='mb-3 mt-3'>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type='text'
                        name='signup-lname'
                        placeholder='Enter Last Name'
                        required
                        />
                    <Form.Control.Feedback type="invalid">
                        Invalid Last Name.
                    </Form.Control.Feedback>
                </div>
                <div className='mb-3 mt-3'>
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control
                        type='text'
                        name='signup-comp-name'
                        placeholder='Enter Company Name'
                        required
                        />
                    <Form.Control.Feedback type="invalid">
                        Invalid Company Name.
                    </Form.Control.Feedback>
                </div>
                <div className='mb-3 mt-3'>
                    <Form.Label>Company Industry</Form.Label>
                    <Form.Select
                        name='signup-comp-industry'
                        required
                        >
                        <option value='1'>Accounting</option>
                        <option value='2'>Marketing</option>
                        <option value='3'>Business</option>
                        <option value='4'>Technology</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        Invalid Company Industry.
                    </Form.Control.Feedback>
                </div>
                <div className='mb-3 mt-3'>
                    <Form.Label>Country</Form.Label>
                    <Form.Select
                        name='signup-country'
                        required
                        >
                        <option value='1'>Algeria</option>
                        <option value='2'>Albania</option>
                        <option value='3'>Australia</option>
                        <option value='4'>Belgium</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        Invalid Country.
                    </Form.Control.Feedback>
                </div>
                <div className='mb-3 mt-3'>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        type='tel'
                        name='signup-phone'
                        placeholder='Enter Phone'
                        required
                        />
                    <Form.Control.Feedback type="invalid">
                        Invalid Phone.
                    </Form.Control.Feedback>
                </div>
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
                </div>
                <div className='mb-3'>
                    <Form.Check
                        type='checkbox'
                        name='signup-agreement'
                        label='I have read and accept the Privacy Policy and Terms of Service'
                        />
                    <Form.Control.Feedback type="invalid">
                        Not Checked.
                    </Form.Control.Feedback>
                </div>
                <Button type='submit' variant='primary w-100'>
                    Signup
                </Button>
                <p className='mt-3 text-center'>Already have an account? 
                    <NavLink to={'/login'} className='colored-link'> Login</NavLink>
                </p>
            </Form>
        </div>
    )
}
