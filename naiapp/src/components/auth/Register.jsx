import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [email, setEmail] = useState("");
    const [salonName, setSalonName] = useState("");
    const [name, setName] = useState("");
    const [password, setPass] = useState("");
    const [phone, setPhone] = useState("");
    const [errors, setErrors] = useState({});
    const [userType, setUserType] = useState("");
    const [showAdditionalFields, setShowAdditionalFields] = useState(false);

    const navigate = useNavigate();

    const handleUserTypeChange = (selectedType) => {
        setUserType(selectedType.target.value);
        setShowAdditionalFields(true);
    };

    const handleFormValidate = () => {
        const error = {};

        // Perform validation for all fields
        if (!name) {
            error.name = "Name is required";
        }
        if (!email) {
            error.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            error.email = "Invalid email address";
        }
        if (!phone) {
            error.phone = "Phone number is required";
        } else if (!/^\d{10}$/.test(phone)) {
            error.phone = "Invalid phone number";
        }
        if (!password) {
            error.password = "Password is required";
        } else if (password.length < 6) {
            error.password = "Password must be at least 6 characters";
        }
        if (userType === 'company' && !salonName) {
            error.salonName = "Salon name is required";
        }

        setErrors(error);

        if (Object.keys(error).length === 0) {
            // Validation successful, proceed with registration
            const credentials = {
                name: name,
                email: email,
                phone: phone,
                password: password,
                isAdmin: userType === 'company',
                salonName: userType === 'company' ? salonName : ''
            };

            axios.post(userType === 'company' ? "http://localhost:8000/salon/register" : "http://localhost:8000/salon/registeruser", credentials)
                .then((res) => {
                    console.log(res);
                    if (res.status === 201) {
                        alert("Successfully Registered!!!");
                        localStorage.setItem('isLogin', true);
                        localStorage.setItem('email', email);
                        localStorage.setItem('isAdmin', userType === 'company'?true:false);
                        navigate('/');
                        window.location.reload();
                    } else {
                        alert(res.status);
                    }
                })
                .catch((error) => {
                    alert(error);
                });
        }
    };

    return (
        <Row>
            <Col md={12}>
                <div
                    className="modal show"
                    style={{ display: 'block', position: 'initial' }}
                >
                    <Modal.Dialog>
                        <Modal.Header>
                            <Modal.Title>Register</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Form>
                                <Row>
                                    <Col md={4}>
                                        <b>Register as </b>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Check
                                            type="radio"
                                            onChange={handleUserTypeChange}
                                            checked={userType === 'user'}
                                            label="User"
                                            value="user"
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
                                {showAdditionalFields && (
                                    <>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" onChange={(e) => { setName(e.target.value) }} placeholder="Enter Name" />
                                            <Form.Text className="text-muted">
                                                {!!errors.name && errors.name}
                                            </Form.Text>
                                        </Form.Group>
                                        {userType === 'company' && (
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Salon Name</Form.Label>
                                                <Form.Control type="text" onChange={(e) => { setSalonName(e.target.value) }} placeholder="Enter salon name" />
                                                <Form.Text className="text-muted">
                                                    {!!errors.salonName && errors.salonName}
                                                </Form.Text>
                                            </Form.Group>
                                        )}
                                        <Form.Group className="mb-3" controlId="formBasicTel">
                                            <Form.Label>Phone number</Form.Label>
                                            <Form.Control type="text" onChange={(e) => { setPhone(e.target.value) }} placeholder="Enter phone number" />
                                            <Form.Text className="text-muted">
                                                {!!errors.phone && errors.phone}
                                            </Form.Text>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter email" />
                                            <Form.Text className="text-muted">
                                                {!!errors.email && errors.email}
                                            </Form.Text>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" onChange={(e) => { setPass(e.target.value) }} placeholder="Password" />
                                            <Form.Text className="text-muted">
                                                {!!errors.password && errors.password}
                                            </Form.Text>
                                        </Form.Group>
                                    </>
                                )}
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                            </Form>
                            <Row>
                                <Col md={6}>
                                    <p style={{ fontSize: "15px" }}>Already have an account ?</p>
                                </Col>
                                <Col md={6}>
                                    <Link to='/login' style={{ color: 'black', textDecoration: 'none', fontSize: "15px" }}><b style={{ color: "blue" }}>Login</b></Link>
                                </Col>
                            </Row>
                        </Modal.Body>

                        {showAdditionalFields && (
                            <Modal.Footer>
                                <Button variant="secondary" >Close</Button>
                                <Button variant="success" onClick={handleFormValidate}>Register</Button>
                            </Modal.Footer>
                        )}
                    </Modal.Dialog>
                </div>
            </Col>
        </Row>
    );
};

export default Register;
