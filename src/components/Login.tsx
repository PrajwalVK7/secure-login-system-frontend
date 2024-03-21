import React from 'react'
import './style.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Login() {
    return (
        <div className='login-root d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
            <div  style={{height:'20rem',width:'20rem'}}  >
                    <Form className='p-3 rounded container '>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
            </div>


        </div>
    )
}

export default Login