import React from 'react';
import {connect} from "react-redux";
import {login,getFriends} from "../Actions"

class Login extends React.Component{
state={
    credentials:{
        username:'',
        password:''
    }
}

onChange=e=>{
this.setState({
    credentials:{
        ...this.state.credentials,
        [e.target.name]:e.target.value
    }
})
}
login=e=>{
    e.preventDefault();
    this.props.login(this.state.credentials).then(()=>{
        this.props.history.push('/protected')
    })


}


render(){
    return(
        <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.credentials.username}
            onChange={this.onChange}
          />
          <br />
          <input
            type="text"
            placeholder="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.onChange}
          />
          <br />
          <button>LOGIN</button>
        </form>
            
        </div>

    )
}
}
export default connect (
    null,
    {login,getFriends}
)(Login)
