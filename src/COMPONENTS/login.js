import React, { Component } from "react";
import "./login.css";
import { auth } from "../DATABASE/firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

class Login extends Component {
  constructor() {
    super();
    this.userNameInp = React.createRef();
    this.userPasswordInp = React.createRef();
  }

  componentDidMount() {
    this.userNameInp.current.focus();
  }

  loginFun = async (e) => {
        e.preventDefault();
        // alert(`userN : ${this.userNameInp.current.value}\nuserP : ${this.userPasswordInp.current.value}`)
        let LOGIN;
        try {
             LOGIN = await signInWithEmailAndPassword(
                    auth,
                    this.userNameInp.current.value,
                    this.userPasswordInp.current.value
                );
            console.log(LOGIN)
            if (LOGIN.user.email) {
                let PRINT = document.getElementById('container')
                PRINT.innerHTML = `<i>logged in successfully!<i>`
                PRINT.style = 'font-size: 5rem; font-weight: bolder;'
            }
        } catch(err) {
            console.error(err.message)
        }
    };

    signUpFun = async(e) => {
        e.preventDefault();
        let SIGNUP;
        try{
            SIGNUP = await createUserWithEmailAndPassword(
                auth,
                this.userNameInp.current.value,
                this.userPasswordInp.current.value
            );
            // console.log(SIGNUP)
            if (SIGNUP.user.email) {
                console.log("signed up successfully!");
            }
        } catch(err) {
            console.error(err.message)
        }
    };

    logOutFun = async () => {
        let LOGOUT;
        try {
            LOGOUT = await signOut(
            auth,
            this.userNameInp.current.value,
            this.userPasswordInp.current.value
        );
        //   console.log(LOGOUT);
        if (LOGOUT.user.email) {
            console.log("loggedout successfully!");
        };
        } catch (error) {
        console.log(error.message);
        }
    };

    render() {
        return (
        <>
            <form id="form" onSubmit={ this.loginFun }>
            <input
                type={ "email" }
                className="userInp"
                placeholder=" Enter your name here:"
                ref={this.userNameInp}
                required
            />
            <input
                type={ "password" }
                className="userInp"
                placeholder=" Enter your password here:"
                ref={this.userPasswordInp}
                autoComplete="off"
                required
            />
            <button className="login"><strong>login?</strong></button>
            <p className="forgot"><strong>forgotten password?</strong></p>
            <hr></hr>
            </form>
            <button onClick={ this.signUpFun }  className="signup">Sign up?</button>
            {/* <button
                onClick={this.logOutFun()}
                style={{ backgroundColor: "white", color: "blue" }}
            >
                SignOut?
            </button>  */}
        </>
        );
    }
}

export default Login;
