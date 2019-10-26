import React,  { useRef } from 'react';
import * as userActions from './login.actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = dispatch => {
    return {
        saveUserInfo: user => dispatch(userActions.setUser(user))
    }
}

const Login = props => {
    const inputUserName = useRef(null);
    const inputPassword = useRef(null);
    const login = () => {
        if(inputUserName.current.value === 'react' && inputPassword.current.value === 'fictizia') {
            const user = {
                userName: inputUserName.current.value,
                userPassword: inputPassword.current.value
            }
            props.saveUserInfo(user);
            props.history.push('./posts');
            console.log(inputUserName.current.value, inputPassword.current.value)
        }
    }
    return <div>
        <h1>Login</h1>
            <input type="text" ref={inputUserName}></input>
            <input type="password" ref={inputPassword}></input>
            <button onClick={login}>Login</button>
    </div>
}

export default connect(null, mapDispatchToProps)(withRouter(Login))
