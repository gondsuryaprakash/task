export const  loggedInAction = (payload) => {
    return {
        type: "LOGGEDIN",
        payload
    }
}

export const dataAction=(payload)=>{
    return {
        type:"SETDATA",
        payload
    }
}
