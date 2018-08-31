import React, { Component } from 'react';

class LoginForm extends Component {
    state = {  }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submited");
    }

    render() { 
        return ( 
            <div className="container">
            <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input id="username" className="form-control" type="text"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input id="password" className="form-control"/>
                </div>
                <button className="btn btn-primary" tyoe="submit">Login</button>
                </form>
            </div>
         );
    }
}
 
export default LoginForm;