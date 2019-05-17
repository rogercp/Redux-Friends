import {LOGIN_START,LOGIN_SUCCESS,LOADING_FRIENDS} from "../Actions"

const initalState={
    loggedIn:false,
    loadingFriends:false,
    friends:[],
    error:null,
}

export const reducer =(state=initalState,action)=>{
    switch(action.type){
    case LOGIN_START:
    return {
        ...state,
        loggedIn:true,
        error:'',
    }
    case LOGIN_SUCCESS:
    return{
        ...state,
        loadingFriends:false,
        friends:action.payload,
        error:'',
    }
    case LOADING_FRIENDS:
    return{
        ...state,
        loadingFriends:false,
        friends:action.payload,
        error:'',
    }
    default:
    return state;
    
}
}
export default reducer;