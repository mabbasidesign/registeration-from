import React, { Component } from 'react';
import joi from "joi-browser";

class Register extends Component {
    state = { 
        account: {username: "", password: ""},
        errors : {}
     };

     schema = {
        username: joi.string().required().label("Username"),
        password: joi.string().required().label("Password")
     };

    handleChange = ({ currentTarget: input }) => {
        const errors = {...this.state.errors}
        const errorMessage = this.validateProperty(input);
        if(errorMessage) errors[input.name] = errorMessage;
            else delete errors[input.name];

        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({ account, errors });
    }

    validate = () => {
        const result = joi.validate(this.state.account, this.schema, { abortEarly: false });
        console.log(result);

        if(!result.error) return null;

        const errors = {};
        for(let item of result.error.details)
            errors[item.path[0]] = item.message;
        return errors;
    };

    validateProperty = ({ name, value }) => {
        if(name === "username"){
            if(value.trim() === '') return "username is required";
        }
            
        if(name === "password"){
            if(value.trim() === '') return "password is required";
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        console.log(errors);
        this.setState({ errors: errors || {} });
        if(errors) return;

        console.log("submitted");
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

export default Register;