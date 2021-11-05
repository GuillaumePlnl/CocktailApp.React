import React from 'react';

//import './Login.css'

export default function Login() {
  return(
    <div className="login-wrapper">
        <h1>Please Log In</h1>
        <form class="form-group">
            <label>
                <p>Username</p>
                <input type="text" class="form-control" />
            </label><br/>
            <label>
                <p>Password</p>
                <input type="password" class="form-control" />
            </label>
            <div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
  )
}