import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../../../assets/scss/AdminLogin.scss';

const AdminLogin = () => {
    const navigate = useNavigate();
    const [loginForm, setLoginForm] = useState({ email: "", password: "" });
    const [passwordError, setpasswordError] = useState("");
    const [emailError, setemailError] = useState("");

    const handleChange = (e) => {
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value })
    }

    const handleValidation = (event) => {
        let formIsValid = true;

        if (!loginForm?.email?.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
            formIsValid = false;
            setemailError("Email Not Valid");
            return false;
        } else {
            setemailError("");
            formIsValid = true;
        }

        if (!loginForm?.password?.match(/^[a-zA-Z]{8,22}$/)) {
            formIsValid = false;
            setpasswordError(
                "Only Letters and length must best min 8 Chracters and Max 22 Chracters"
            );
            return false;
        } else {
            setpasswordError("");
            formIsValid = true;
        }

        return formIsValid;
    };

    const handleLogin = (e) => {
        e.preventDefault();
        handleValidation();
        localStorage.setItem("isLogin", true)
        navigate("/dashboard");
    };

    return (
        <Form className='login_form' onSubmit={handleLogin}>
            <h5>Login</h5>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name='email' onChange={(e) => handleChange(e)} />
                <small id="emailHelp" className="text-danger form-text">
                    {emailError}
                </small>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name='password' onChange={(e) => handleChange(e)} />
                <small id="emailHelp" className="text-danger form-text">
                    {passwordError}
                </small>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}
export default AdminLogin;