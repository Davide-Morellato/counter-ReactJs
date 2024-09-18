import React from "react";

import './users.styles.scss';

class Users extends React.Component{

    constructor(props){

        super(props);

        this.state = {
            //definisco lo state di Users
            users: []
        }
    }

    render(){
        return(
            <div className="users">

            </div>
        )
    }
}

export default Users;