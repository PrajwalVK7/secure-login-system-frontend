import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Register() {
    return (
        <div className='login-root d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
            <div style={{ height: '20rem', width: '20rem' }}  >
                <Form className='p-3 rounded container '>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Full Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Address" />
                    </Form.Group>
                    <Form.Select className="mb-3" aria-label="Default select example">
                        <option>Gender</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                    </Form.Select>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
            </div>


        </div>)
}

export default Register