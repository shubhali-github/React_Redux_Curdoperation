import React, { useEffect, useState} from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Form, FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import useForm from "./useForm";
import * as actions from "../actions/compnay";

import {connect} from "react-redux";
const initialCompanyData={
    name:"",
    description:"",
    contact_no:null,
    email:"",
    logo:"",
    state:"",
    city:"",
}
const ComapnyData = (props) => {
    const handelSubmit=e=>{
        e.preventDefault();
        console.log("Values",values)
        const onSuccess=()=>{            window.alert("Successfully added");
            window.alert("Successfully added");
}
        if(validate()){
            props.createCompanyData(values,onSuccess())
        }
    }

     const validate = () => {
       let temp = { ...errors };
       temp.name = values.name ? "" : "This field is required.";
       temp.description = values.description ? "" : "This field is required.";   
       temp.email = values.email ? "" : "This field is required.";
       temp.state = values.state ? "" : "This field is required.";
       temp.city = values.city ? "" : "This field is required.";
       temp.logo = values.logo ? "" : "This field is required.";

       setErrors({
         ...temp,
       });
       return Object.values(temp).every((x) => x == "");
     };
  var {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
  //  resetForm,
  } = useForm(initialCompanyData);
    return (
      <Form onSubmit={handelSubmit}>
        <Form.Group as={Row} controlId="formPlaintextName">
          <Form.Label column sm="2">
            Name :
          </Form.Label>
          <Col sm="10">
            <Form.Control
              size="sm"
              name="name"
              type="text"
              placeholder=" Company Name"
              value={values.name}
              onChange={handleInputChange}
              {...(errors.name && {
                error: true,
                helpertext: errors.name,
              })}
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label column sm="2">
            Description :
          </Form.Label>
          <Col sm="10">
            <Form.Control
              size="sm"
              name="description"
              type="text"
              placeholder=" Company Description"
              value={values.description}
              onChange={handleInputChange}
              {...(errors.description && {
                error: true,
                helpertext: errors.description,
              })}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email:
          </Form.Label>
          <Col sm="10">
            <Form.Control
              size="sm"
              name="email"
              type="email"
              placeholder=" Company Email"
              value={values.email}
              onChange={handleInputChange}
              {...(errors.email && {
                error: true,
                helpertext: errors.email,
              })}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPhone">
          <Form.Label column sm="2">
            Phone:
          </Form.Label>
          <Col sm="10">
            <Form.Control
              size="sm"
              name="contact_no"
              type="text"
              placeholder="Phone No."
              value={values.contact_no}
              onChange={handleInputChange}
              {...(errors.contact_no && {
                error: true,
                helpertext: errors.contact_no,
              })}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextAddr">
          <Form.Label column sm="2">
            State:
          </Form.Label>
          <Col sm="10">
            <Form.Control
              size="sm"
              name="state"
              type="text"
              placeholder="State"
              value={values.state}
              onChange={handleInputChange}
              {...(errors.state && {
                error: true,
                helpertext: errors.state,
              })}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="2">
            City:
          </Form.Label>
          <Col sm="10">
            <Form.Control
              size="sm"
              name="city"
              type="text"
              placeholder="City"
              value={values.city}
              onChange={handleInputChange}
              {...(errors.city && {
                error: true,
                helpertext: errors.city,
              })}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Logo:
          </Form.Label>
          <Col sm="10">
            <Form.Control
              size="sm"
              name="logo"
              type="text"
              placeholder="Logo"
              value={values.logo}
              onChange={handleInputChange}
              {...(errors.logo && {
                error: true,
                helpertext: errors.logo,
              })}
            />
          </Col>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
}
const mapStateToProps = state => ({
    postMessageList: state.company.list
})

const mapActionToProps = {
    createCompanyData: actions.create,
    updateCompanyData: actions.update
}



 
export default connect(mapStateToProps, mapActionToProps)(ComapnyData);