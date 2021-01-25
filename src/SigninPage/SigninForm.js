import React from 'react'
import "./SigninForm.css"

const SigninForm = () => {
    return (
        <>
            <div className="detail-container">
                <div className="box">
                    <input className="email-input" type="text" name="" required="required"></input>
                    <span className="email-span">Email Address</span>
                </div>
                <div className="box1">
                    <input className="email-input" type="password" name="" required="required"></input>
                    <span className="email-span">Password</span>
                </div>
                <div className="box2">
                    <label><input className="input" type="checkbox" />Remember Me</label>
                    <p>Forgot Password ?</p>
                </div>
                <div className="box3">
                    <button>Log in</button>
                </div>
            </div>
        </>
    )
}

export default SigninForm
