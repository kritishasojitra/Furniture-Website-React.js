import React, { useState } from 'react';
import "../Css/Singup.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const obj = {
  email: "",
  password: ""
};

const Login = () => {
  const [state, setState] = useState(obj);
  const Navigate=useNavigate()

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (state.email && state.password) {
      fetch(`http://localhost:2424/login?email=${state.email}`)
        .then((res) => res.json())
        .then((res) => {
          if (res.message === 'Login successful') {
            if (res.user.password === state.password) {
              alert("Logging in successfully...");
              localStorage.setItem("islogin",true)
              Navigate("/Product")
            } else {
              alert("Wrong password");
            }
          } else {
            alert("Invalid email or password");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Please enter your email and password");
    }
  };

  return (
    <>
      <div className="a-box1">
        <div className="a-box2">
          <img src="https://demo.theme-sky.com/nooni/wp-content/uploads/2023/04/about-parallax-1.jpg" alt="Login" />
          <div className="img-box">
            <h1>Login</h1>
          </div>
        </div>
      </div>

      <div className='from-box'>
        <div className='f-box'>
          <Form onSubmit={handleClick}><br /><br />
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" onChange={handleChange} />
            </Form.Group><br />
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" onChange={handleChange} />
            </Form.Group><br />
            <Button variant="dark" type="submit" className='w-100'>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
