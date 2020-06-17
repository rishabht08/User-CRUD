import React, { useState } from 'react';
import Users from "../../assets/ico_users_white.svg"
import Search from "../../assets/ico_search.svg"
import Add from "../../assets/ico_add.svg"
import { Modal, Form } from "react-bootstrap"
import { useForm } from 'react-hook-form';
import * as UserActions from "../../store/actions/userActions"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import swal from "sweetalert"




function UserBar(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    props.userActions.addUser(data).then(res=>{
      if(res.errors){
        swal({
          title: "Email Duplication",
          text: "Enter Different Email Address",
          icon: "warning",
          button: "Ok",
          dangerMode: true,
        })

      }
      else{
        props.userActions.getUsers().then(()=>{
          setShow(false)

        })
      
      }
    })
  }
  console.log(errors)

  const searchUser = (query) =>{
    props.userActions.searchUser(query)
  }
  return (
    <div className="userbar">

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>

        </Modal.Header>

        <Modal.Body>
          <div >
            <h3>Add User</h3>
            <form className="modal-body-in" onSubmit={handleSubmit(onSubmit)}>
              <input placeholder="Name" className="input-modal" name="name" ref={register({ required: true, maxLength: 80 })} />
              <input placeholder="Email" className="input-modal" name="email" type="email" ref={register({ required: true, maxLength: 80 })} />

              <div className="radioModal">
                <div className="radio-item">
                  <input type="radio" id="ritema" name="roleType" value="Admin" ref={register({ required: true })} />
                  <label for="ritema">Admin</label>
                </div>

                <div className="radio-item">
                  <input type="radio" id="ritemb" name="roleType" value="Customer Executive" ref={register({ required: true })} />
                  <label for="ritemb">Customer Executive</label>
                </div>

              </div>

              <div className="radioModal">
                <div className="radio-item">
                  <input type="radio" id="statusa" name="status" value="Active" ref={register({ required: true })} />
                  <label for="statusa">Active</label>
                </div>

                <div className="radio-item">
                  <input type="radio" id="statusb" name="status" value="Inactive" ref={register({ required: true })} />
                  <label for="statusb">Inactive</label>
                </div>

                <div className="radio-item">
                  <input type="radio" id="statusc" name="status" value="Pending" ref={register({ required: true })} />
                  <label for="statusc">Pending</label>
                </div>

              </div>
              <input placeholder="Phone No.(Optional)" className="input-modal" />
              <button type="submit" className="btn btn-warning">Add User</button>
            </form>

          </div>

        </Modal.Body>

      </Modal>

      <div className="item1">
        <img src={Users} />
        <span>Users</span>
      </div>

      <div className="item2">

        <input placeholder="Search" onChange = {(e)=>searchUser(e.target.value)}/>
        <img src={Search} />

      </div>

      <div className="item3">
        <button type="button" className="btn btn-warning" onClick={handleShow}><img src={Add} /> Add User</button>
      </div>

    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("state", state)
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userActions: bindActionCreators(UserActions , dispatch) 

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(UserBar)
