import { Navigate } from "react-router-dom";

function ProtectedRoute({children, roles}){
    const user = JSON.parse(localStorage.getItem("user"));
    
    if(!user){
        return <Navigate to="/home" replace/>
    }

    if(roles && !roles.includes(user.role)){
        return <Navigate to="/403" replace/>
    }
    return children;
}

export default ProtectedRoute;