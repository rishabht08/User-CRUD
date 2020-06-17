import React, { useEffect, useState } from 'react';
import UpArrow from "../../assets/ico_sorting.svg"
import Active from "../../assets/ico_active.svg"
import Inactive from "../../assets/ico_inactive.svg"
import Pending from "../../assets/ico_pending.svg"
import Edit from "../../assets/ico_edit.svg"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as UserActions from "../../store/actions/userActions"
import { Form } from "react-bootstrap"
import Close from "../../assets/ico_close.svg"
import swal from "sweetalert"





function Table(props) {

  const [id, setId] = useState("");
  const [name, setName] = useState("")
  const [roleType, setRoleType] = useState("")
  const [status, setStatus] = useState("")
  const [email, setEmail] = useState("")

  const goToEdit = (index) => {
    props.userActions.goToEdit(index)
    let user = props.users[index]
    setId(user.id)
    setName(user.name)
    setRoleType(user.roleType)
    setStatus(user.status)
    setEmail(user.email)

  }

  const cancelEdit = () => {
    props.userActions.cancelEdit()
    setId("")
    setName("")
    setRoleType("")
    setStatus("")
    setEmail("")

  }

  const updateUser = () => {
    if (name != "") {
      let data = {}
      data.name = name;
      data.email = email;
      data.roleType = roleType;
      data.status = status
      props.userActions.updateUser(id , data).then(() => {
        setId("")
        setName("")
        setRoleType("")
        setStatus("")
        setEmail("")
        props.userActions.getUsers()
      })
    }
  }

  const deleteUser = (userId) =>{
    swal({
      title: "Are you sure?",
      text: "User Will be deleted Permanently",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        props.userActions.deleteUser(userId).then(res=>{
          swal("User has been deleted", {
            icon: "success",
          }).then(()=>{
            props.userActions.getUsers()
          });

        })
       
      } 
    });


  }

  const CheckStatus = (status) => {
    if (status == "Active") {
      return Active
    }

    else if (status == "Inactive") {
      return Inactive
    }

    else if (status == "Pending") {
      return Pending
    }
  }

  return (
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">NAME <img src={UpArrow} /></th>
          <th scope="col">EMAIL</th>
          <th scope="col">ROLE TYPE</th>
          <th scope="col">STATUS</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((user, index) => (
          props.isEdit[index] == 0 ?
            <tr>
              <td scope="row">{user.name}</td>
              <td>{user.email}</td>
              <td>{user.roleType}</td>
              <td><img src={CheckStatus(user.status)} /> {user.status}</td>
           
              <td><img src={Edit} className="editSvg" onClick={() => goToEdit(index)} /></td>
              <td style={{ cursor: "pointer" , color:"red" }}>   <i className="fas fa-trash-alt" onClick={()=>deleteUser(user.id)}></i> </td>
            </tr> :
            <tr>
              <td scope="row"><input className="form-control" value={name} onChange={(e) => setName(e.target.value)}></input></td>
              <td>{user.email}</td>
              <td>
                <Form.Control as="select" defaultValue="Choose..." value={roleType} onChange={(e) => setRoleType(e.target.value)}>
                  <option>Admin</option>
                  <option>Customer Executive</option>
                </Form.Control>
              </td>
              <td>
                <Form.Control as="select" defaultValue="Choose..." value={status} onChange={(e) => setStatus(e.target.value)}>
                  <option>Active</option>
                  <option>Inactive</option>
                  <option>Pending</option>
                </Form.Control>
              </td>
              <td style={{ cursor: "pointer" }}><i className="fas fa-check-square fa-2x" onClick={() => updateUser()}></i></td>
              <td style={{ cursor: "pointer" }}><img src={Close} onClick={() => cancelEdit()} /></td>
            </tr>


        ))}


      </tbody>
    </table>
  );
}

const mapStateToProps = (state) => {

  return {
    users: state.userReducer.users,
    isEdit: state.userReducer.isEdit,


  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userActions: bindActionCreators(UserActions, dispatch)
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Table)
