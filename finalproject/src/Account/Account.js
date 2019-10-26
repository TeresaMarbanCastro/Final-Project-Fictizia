import React from 'react';
import { connect } from 'react-redux';

const Account = props => {
    return <div>
        <h1>Account</h1>
        <label>User name: {props.userInfo.UserName}</label>
        <label>Password: {props.userInfo.userPassword}</label>

    </div>
}

const mapStateToProps = state => {
    return {
        userInfo: state.login.user
    }
}
export default connect(mapStateToProps, null)(Account)