import React, { useState } from 'react';
import "../Css/Singup.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Singup = () => {
    const [state, setState] = useState({
        name: "",
        email: "",
        password: ""
    });
    const Navigate=useNavigate()

    const handleChange = (el) => {
        const { name, value } = el.target;
        setState({ ...state, [name]: value });
    };

    const handleSubmit = (el) => {
        el.preventDefault();

        fetch('http://localhost:2424/signup', {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(state)
        })
        .then((res) => res.json())
        .then((data) => {
            alert("Signup successful:", data);
            Navigate("/Loign")
        })
        .catch((error) => {
            console.error("Error during signup:", error);
        });
    };

    return (
        <>
            <div className="a-box1">
                <div className="a-box2">
                    <img src="https://demo.theme-sky.com/nooni/wp-content/uploads/2023/04/about-parallax-1.jpg" alt="Signup" />
                    <div className="img-box">
                        <h1>Sign-Up</h1>
                    </div>
                </div>
            </div>

            <div className='from-box'>
                <div className='f-box'>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formGroupName">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" name="name" onChange={handleChange} />
                        </Form.Group><br/>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" onChange={handleChange} />
                        </Form.Group><br/>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" onChange={handleChange} />
                        </Form.Group><br/>
                        <Button variant="dark" type="submit" className='w-100'>
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    );
}

export default Singup;
