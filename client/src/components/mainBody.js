import React , { useEffect } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "../styles/main.css"
import "../styles/userbar.css"
import UserBar from "./subcomponents/UserBar"
import Table from './subcomponents/Table';

import * as UserActions from "../store/actions/userActions"



function MainBody(props) {
  useEffect(() => {
    props.userActions.getUsers()
  });
  return (
    <div className="mainBody">
      <div className="main-padding">
        <UserBar />
        <Table />

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

export default connect(mapStateToProps, mapDispatchToProps)(MainBody)
