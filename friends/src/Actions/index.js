import axios from 'axios'

export const LOGIN_START="LOGIN_START";
export const LOGIN_SUCCESS="LOGIN_SUCCESS";
export const LOADING_FRIENDS="LOADING_FRIENDS";

export const login=creds=>dispatch=>{
dispatch({type:LOGIN_START})
return axios.post('http://localhost:5000/api/login',creds)
.then(res=>{
    localStorage.setItem('token', res.data.payload);
    dispatch({type:LOADING_FRIENDS})
})
}

export const getFriends=()=>dispatch=>{
axios
.get("http://localhost:5000/api/friends",{
    headers:{Authorization:localStorage.getItem("token")}
})
.then(res=>{
    dispatch({type:LOGIN_SUCCESS,payload:res.data})
})
.catch(err=>console.log(err))

}
