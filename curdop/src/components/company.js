import {connect} from 'react-redux'
import React ,{useEffect,useState}from "react";
import Table from "react-bootstrap/Table";
import * as actions from "../actions/compnay";
import Button from "react-bootstrap/Button";

import { faEdit, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ComapnyData from './comapnyData';
const Company = (props) => {
    const[currentId,setCurrentId]=useState(0)
    const [show, setShow] = useState(false);

    useEffect(() => {
        props.fetchAllCompanyData()
    }, [])
    const onEditfun=(id)=>{
        setCurrentId(id);
        setShow(true);
    }
    const onDelete=id=>{
        const onSuccess = () => {
          window.alert("Successfully Deleted Company Data");
        };
        if(window.confirm("Are you Sure to Delete this record"))
        props.deleteComapnydata(id,onSuccess)
    }
    return (
    <div>
            <ComapnyData {...{currentId,setCurrentId,show,setShow}} />
            <h3>List of Compay's</h3>
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
                  <th>Actions</th>
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
                      <td>
                        <Button onClick={() => onEditfun(data.id)}>
                          Edit
                        </Button>
                      </td>
                      <td>
                        <Button onClick={() => onDelete(data._id)}>
                          Delete
                        </Button>
                      </td>
                      {/* <td>
                        <FontAwesomeIcon
                          icon={faEdit}
                          onClick={() => setCurrentId(data._id)}
                        />
                        <FontAwesomeIcon
                          icon={faTrash}
                          onClick={() => onDelete(data._id)}
                        />
                      </td> */}
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            </div>
    );
}
const mapStatetoProps=state=>({
postcompnatList:state.company.list
})
 const mapActiontoProps = {
   fetchAllCompanyData: actions.fetchAll,
   deleteComapnydata:actions.Delete,
 };
export default connect(mapStatetoProps, mapActiontoProps)(Company);