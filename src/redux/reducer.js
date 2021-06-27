const initialValue={
    userdata:[],
    isLoggedIn:false
}
const reducer=(state=initialValue,action)=>{

if(action.type=='LOGGEDIN')
{
    return {
        ...state,
        isLoggedIn:action.payload
    }
}
else if(action.type=='SETDATA')
{
    return {
        ...state,
        userdata:action.payload
    }
}
return state
}

export default reducer