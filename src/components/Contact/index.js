import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Contact() {
    const [validated, setValidated] = useState(false)
    function hanldeSubmit(event) {
        const form = event.currentTarget;
        event.preventDefault()
        if (!form.checkValidity()) {
            return
        }
        setValidated(true)
        alert("Message submitted! (or it would be, if this form were hooked up to anything)")
        window.location.reload()
    }
    function runValidation(event) {
        event.target.closest('.form-group').classList.add("was-validated")
    }
    return(
        <Form noValidate validated={validated} className="mt-2" onSubmit={hanldeSubmit}>
            <Form.Group controlId="formName">
                <Form.Label className="font-weight-bold">Your Name:</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter your name"
                    required
                    onBlur={runValidation}
                />
                <Form.Control.Feedback type="invalid">This field is required</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formEmail">
                <Form.Label className="font-weight-bold">Your Email:</Form.Label>
                <Form.Control 
                required
                type="email" 
                placeholder="Enter your email"
                onBlur={runValidation}
                />
                <Form.Control.Feedback type="invalid">A valid email is required</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formMessage">
                <Form.Label className="font-weight-bold">Message:</Form.Label>
                <Form.Control
                required
                as="textarea" 
                 rows={4}
                 placeholder="Enter your message"
                 onBlur={runValidation}
                 />
                 <Form.Control.Feedback type="invalid">This field is required</Form.Control.Feedback>
            </Form.Group>
            <Button type="submit">Submit</Button>
        </Form>
    )
}

export default Contact