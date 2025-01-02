// import React from 'react'
// import { Row, Col } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios'


// const Login = () => {
//     const [userEmail, setEmail] = useState("")
//     const [pass, setPass] = useState("")
//     const [loginCrediential, setCredientials] = useState({ email: "", password: "", isAdmin: "" })
//     const [errors, setErrors] = useState({})
//     const [userType, setUserType] = useState('');



//     const navigate = useNavigate()

//     const handleUserTypeChange = (selectedType) => {
//         setUserType(selectedType.target.value);
//     };



//     const handleFormValidate = () => {
//         const error = {}


//         setErrors(error)
//         //login process
//         setCredientials({ email: userEmail, password: pass, isAdmin: "" })

//         if (userType === 'user') {
//             setCredientials({ email: userEmail, password: pass, isAdmin: false })

//         } else {
//             setCredientials({ email: userEmail, password: pass, isAdmin: true })
//         }
//         console.log(loginCrediential)
//         axios.post("http://localhost:8000/salon/login", loginCrediential)
//             .then((res) => {
//                 console.log(res)
//                 alert(res.data.status)
//                 localStorage.setItem('isLogin', true);
//                 localStorage.setItem('email',userEmail);
//                 localStorage.setItem('isAdmin',userType === 'user'?false:true )
//                 navigate('/')
//                 window.location.reload()
//             })
//             .catch((error) => {
//                 alert(error)
//             })
//     }
//     return (
//         <Row>
//             <Col md={12}>
//                 <div
//                     className="modal show"
//                     style={{ display: 'block', position: 'initial' }}
//                 >
//                     <Modal.Dialog>
//                         <Modal.Header >
//                             <Modal.Title>Login</Modal.Title>
//                         </Modal.Header>

//                         <Modal.Body>
//                             <Form>
//                                 <Row>
//                                     <Col md={4}>
//                                         <b>Login as </b>
//                                     </Col>
//                                     <Col md={4}>
//                                         <Form.Check
//                                             type="radio"
//                                             onChange={handleUserTypeChange}
//                                             checked={userType === 'applicant'}
//                                             label="User"
//                                             value="applicant"
//                                         />
//                                     </Col>
//                                     <Col md={4}>
//                                         <Form.Check
//                                             type="radio"
//                                             onChange={handleUserTypeChange}
//                                             checked={userType === 'company'}
//                                             label="Admin"
//                                             value="company"
//                                         />
//                                     </Col>
//                                 </Row>
//                                 <br></br>
//                                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                                     <Form.Label>Email address</Form.Label>
//                                     <Form.Control type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter email" />
//                                     <Form.Text className="text-muted">
//                                         Never share your email with anyone else.
//                                         {!!errors.email}
//                                     </Form.Text>
//                                 </Form.Group>

//                                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                                     <Form.Label>Password</Form.Label>
//                                     <Form.Control type="password" onChange={(e) => { setPass(e.target.value) }} placeholder="Password" />
//                                 </Form.Group>
//                                 <Form.Group className="mb-3" controlId="formBasicCheckbox">
//                                     <Form.Check type="checkbox" label="Check me out" />
//                                 </Form.Group>
//                             </Form>
//                             <Row>
//                                 <Col md={4}>
//                                     <Link to='' style={{ color: 'blue', textDecoration: 'none', fontSize: "15px" }}>Forget password</Link>
//                                 </Col>
//                                 <Col md={4}>
//                                     <p style={{ fontSize: "15px" }}>Don't have an account ?</p>

//                                 </Col>
//                                 <Col md={4}>

//                                     <Link to='/register' style={{ color: 'black', textDecoration: 'none', fontSize: "15px" }}><b style={{ color: "blue" }}>Sign Up</b></Link>

//                                 </Col>
//                             </Row>
//                         </Modal.Body>

//                         <Modal.Footer>
//                             <Button variant="secondary" >Close</Button>
//                             <Button variant="success" onClick={handleFormValidate}>Log In</Button>
//                         </Modal.Footer>
//                     </Modal.Dialog>
//                 </div>

//             </Col>

//         </Row>

//     )
// }

// export default Login

import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [userEmail, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [userType, setUserType] = useState('');
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const handleUserTypeChange = (selectedType) => {
        setUserType(selectedType.target.value);
    };

    const handleFormValidate = () => {
        const error = {};

        if (!userEmail) {
            error.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(userEmail)) {
            error.email = "Invalid email address";
        }

        if (!pass) {
            error.password = "Password is required";
        }

        if (!userType) {
            error.userType = "Please select a user type";
        }

        setErrors(error);

        if (Object.keys(error).length === 0) {
            if(userType==='company'){
            axios.post("http://localhost:8000/salon/login", { email: userEmail, password: pass, isAdmin: true })
                .then((res) => {
                    alert(res.data.status);
                    localStorage.setItem('isLogin', true);
                    localStorage.setItem('email', userEmail);
                    localStorage.setItem('isAdmin',true);
                    navigate('/');
                    window.location.reload();
                })
                .catch((error) => {
                    alert(error);
                });
            }else{
                axios.post("http://localhost:8000/salon/login", { email: userEmail, password: pass, isAdmin: true })
                .then((res) => {
                    alert(res.data.status);
                    localStorage.setItem('isLogin', true);
                    localStorage.setItem('email', userEmail);
                    localStorage.setItem('isAdmin',false);
                    navigate('/');
                    window.location.reload();
                })
                .catch((error) => {
                    alert(error);
                });
            }
        }
    };

    return (
        <Row>
            <Col md={12}>
                <div className="modal show" style={{ display: 'block', position: 'initial' }}>
                    <Modal.Dialog>
                        <Modal.Header>
                            <Modal.Title>Login</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Row>
                                    <Col md={4}>
                                        <b>Login as </b>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Check
                                            type="radio"
                                            onChange={handleUserTypeChange}
                                            checked={userType === 'applicant'}
                                            label="User"
                                            value="applicant"
                                        />
                                    </Col>
                                    <Col md={4}>
                                        <Form.Check
                                            type="radio"
                                            onChange={handleUserTypeChange}
                                            checked={userType === 'company'}
                                            label="Admin"
                                            value="company"
                                        />
                                    </Col>
                                </Row>
                                <br />
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                                    <Form.Text className="text-danger">
                                        {errors.email}
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" onChange={(e) => setPass(e.target.value)} placeholder="Password" />
                                    <Form.Text className="text-danger">
                                        {errors.password}
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                            </Form>
                            <Row>
                                <Col md={4}>
                                    <Link to='' style={{ color: 'blue', textDecoration: 'none', fontSize: "15px" }}>Forget password</Link>
                                </Col>
                                <Col md={4}>
                                    <p style={{ fontSize: "15px" }}>Don't have an account ?</p>
                                </Col>
                                <Col md={4}>
                                    <Link to='/register' style={{ color: 'black', textDecoration: 'none', fontSize: "15px" }}>
                                        <b style={{ color: "blue" }}>Sign Up</b>
                                    </Link>
                                </Col>
                            </Row>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" >Close</Button>
                            <Button variant="success" onClick={handleFormValidate}>Log In</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>
            </Col>
        </Row>
    );
};

export default Login;
