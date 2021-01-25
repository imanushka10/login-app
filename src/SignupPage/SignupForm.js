import React from 'react'
import "./SignupForm.css"

const SignupForm = () => {
    return (
        <>
            <div className="detail-container">
                <div className="box-user">
                    <input className="email-input" type="text" name="" required="required"></input>
                    <span className="email-span">Username</span>
                </div>
                <div className="box">
                    <input className="email-input" type="text" name="" required="required"></input>
                    <span className="email-span">Email Address</span>
                </div>
                <div className="box1">
                    <input className="email-input" type="password" name="" required="required"></input>
                    <span className="email-span">Password</span>
                </div>
                <div className="box2">
                    <label><input className="input" type="checkbox" />I Accept the Term & Condition</label>
                </div>
                <div className="box3">
                    <button>Sign Up </button>
                </div>
            </div>
        </>
    )
}

export default SignupForm
