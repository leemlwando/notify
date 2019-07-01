const isAuthenticated = async (history, router) => {
    let token = await localStorage.getItem("user");
    console.log("token", window.location.pathname)
    if(token === null){
        console.log("null")
        history.push("/auth/login")
         return;
        }
    if((window.location.pathname === "/auth/login" && token !== null) || (window.location.pathname === "/auth/register" && token !== null)){
        history.push("/admin/index");
        return;
    }
    
    return true;
}

export default isAuthenticated;