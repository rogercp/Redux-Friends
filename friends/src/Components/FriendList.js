import React from 'react';
import {connect} from 'react-redux';

import Friend from "./Friend";


class FriendList extends React.Component{
    state={
        friends:[],
        loadingFriends:[],
    }

    componentDidMout(){

    }


    render(){
        return (
            <div>
                {this.props.friends.map(friend=>(
                    <Friend />
                ))}
            </div>
        )
    }
}

const mapStateToProps=state=>({
    friends:state.friends,
    loadingFriends:state.loadingFriends,
})

export default connect(
    mapStateToProps,
    {
        
    }
)(FriendList)
