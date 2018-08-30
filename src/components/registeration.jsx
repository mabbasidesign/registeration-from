import React, { Component } from 'react';

class Registeration extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container">

                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input id="username" className="form-control" type="text"/>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input id="password" className="form-control"/>
                </div>

            </div>
         );
    }
}
 
export default Registeration;