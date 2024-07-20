import React from 'react'
import {Navigate, useLocation} from "react-router-dom"

const ProtectedRouteComponent = ({children}) => {
const user = localStorage.getItem('user')
let location = useLocation();
if (!user.isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
}
return children
}

export default ProtectedRouteComponent