import React, { useState } from 'react'
import './style.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { loginAPI } from '../services/allAPI';

interface Logindata{
    username:String;
    password:String;
}
function Login() {

    const [formData,setFormData] = useState<Logindata>({
        username:"",
        password:""
    })

    const handleLogin =async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const {username,password} = formData;
        if(!username||!password){
            alert("Please fill the form completely")
        }
        else{
            const result:any = await loginAPI(formData)
            // console.log("login data")
            // console.log(result.data.token)
            if(result.status===200){
                alert("Login sucessfull");
                sessionStorage.setItem("token",result.data.token)
            }
        }

    }
    return (
        <div className='login-root d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
            <div  style={{height:'20rem',width:'20rem'}}  >
                    <Form className='p-3 rounded container ' onSubmit={handleLogin}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Username</Form.Label>
                            <Form.Control onChange={(e)=>setFormData({...formData,username:e.target.value})} type="text" placeholder="Enter username" />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={(e)=>setFormData({...formData,password:e.target.value})} type="password" placeholder="Password" />
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