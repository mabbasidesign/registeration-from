import React, { Component } from 'react';

class LoginForm extends Component {
    state = { 
        account: {username: "", password: ""},
        errors : {}
     }

    handleSubmit = e => {
        // e.preventDefault();
        // console.log("Submited");

        e.preventDefault();

        const errors = this.validate();
        console.log(errors);
        this.setState({ errors: errors || {} });
        if(errors) return;

        console.log("submitted");
    }

    validate = () => {
        const errors = {};

        const { account } = this.state;
        if(account.username.trim() === "" )
            errors.username = "Username is required";
        if(account.password.trim() === "")
            errors.password = "Password is required";

        return Object.keys(errors).length === 0 ? null: errors;
    };

    // handleChange = e => {
    //     const account = {...this.state.account};
    //     account.username = e.currentTarget.value;
    //     this.setState({ account });
    // }

    // handleChange = ({ currentTarget: input }) => {
    //     const account = {...this.state.account};
    //     account[input.name] = input.value;
    //     this.setState({ account });
    // }

    validateProperty = ({ name, value }) => {
        if(name === "username"){
            if(value.trim() === '') return "username is required"
        }
        if(name === "username"){
            if(value.trim() === '') return "username is required"
        }
    }

    validateProperty = ({ name, value }) => {
        if(name === "username"){
            if(value.trim() === '') return "username is required";
        }
            
        if(name === "password"){
            if(value.trim() === '') return "password is required";
        }
    }

    handleChange = ({ currentTarget: input }) => {
        const errors = {...this.state.errors}
        const errorMessage = this.validateProperty(input);
        if(errorMessage) errors[input.name] = errorMessage;
            else delete errors[input.name];

        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({ account, errors });
    }

    render() {
        const { account } = this.state;

        return ( 
            <div className="container">
            <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>

                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                    onChange={this.handleChange}
                    value={account.username}
                    name="username"
                    id="password"
                    className="form-control"/>
                    { this.state.errors.username && <div className="aler alert-danger"> {this.state.errors.username} </div> }
                </div>
                

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                    onChange={this.handleChange}
                    value={account.password}
                    name="password"
                    id="password"
                    className="form-control"/>
                    { this.state.errors.password && <div className="aler alert-danger"> {this.state.errors.password} </div> }
                </div>

                <button className="btn btn-primary" tyoe="submit">Login</button>
                </form>
            </div>
         );
    }
}

export default LoginForm;