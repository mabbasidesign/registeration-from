import React, { Component } from 'react';

class LoginForm extends Component {
    state = { 
        account: {username: "", password: ""}
     }

    handleSubmit = e => {
        e.preventDefault();
        console.log("Submited");
    }

    // handleChange = e => {
    //     const account = {...this.state.account};
    //     account.username = e.currentTarget.value;
    //     this.setState({ account });
    // }

    handleChange = ({ currentTarget: input }) => {
        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({ account });
    }

    render() {
        const { account } = this.state;

        return ( 
            <div className="container">
            <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>

                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <label htmlFor="password">Password</label>
                    <input
                    onChange={this.handleChange}
                    value={account.username}
                    name="username"
                    id="password"
                    className="form-control"/>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                    onChange={this.handleChange}
                    value={account.password}
                    name="password"
                    id="password"
                    className="form-control"/>
                </div>

                <button className="btn btn-primary" tyoe="submit">Login</button>
                </form>
            </div>
         );
    }
}

export default LoginForm;