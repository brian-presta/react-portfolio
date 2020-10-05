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
    }
    function runValidation(event) {
        event.target.closest('form').classList.add("was-validated")
    }
    return(
        <Form validated={validated} className="mt-2" onSubmit={hanldeSubmit}>
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
                <Form.Control type="email" placeholder="Enter your email"/>
            </Form.Group>
            <Form.Group controlId="formMessage">
                <Form.Label className="font-weight-bold">Message:</Form.Label>
                <Form.Control as="textarea" rows={4}placeholder="Enter your message"/>
            </Form.Group>
            <Button type="submit">Submit</Button>
        </Form>
    )
}

export default Contact