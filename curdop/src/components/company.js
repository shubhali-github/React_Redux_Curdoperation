import {connect} from 'react-redux'
import React ,{useEffect,useState,Fragment}from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import * as actions from "../actions/compnay";
import {
  Grid,
  Paper,
  List,
} from "@material-ui/core";
import ComapnyData from './comapnyData';
const Company = (props) => {
    useEffect(() => {
        props.fetchAllCompanyData()
    }, [])
    return (
      <Grid container>
        <Grid item xs={3}>
          <Paper>
            <ComapnyData />
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper>
            <div>List of Compay's</div>
            <Table striped hover responsive>
              <thead>
                <tr>
                  <th>sr.no</th>
                  <th>Company Name</th>
                  <th>Description</th>
                  <th>Contact number</th>
                  <th>Email</th>
                  <th>logo</th>
                  <th>State</th>
                  <th>City</th>
                </tr>
              </thead>
              <tbody>
                {props.postcompnatList.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{data.name}</td>
                      <td>{data.description}</td>
                      <td>{data.contact_no}</td>
                      <td>{data.email}</td>
                      <td>{data.logo}</td>
                      <td>{data.state}</td>
                      <td>{data.city}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <List></List>
          </Paper>
        </Grid>
     
      </Grid>
    );
}
const mapStatetoProps=state=>({
postcompnatList:state.company.list
})
 const mapActiontoProps = {
   fetchAllCompanyData: actions.fetchAll,
 };
export default connect(mapStatetoProps, mapActiontoProps)(Company);