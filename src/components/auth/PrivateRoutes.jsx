import { Navigate , Outlet } from "react-router-dom";

const PrivateRoutes = () => {
    let auth = {'token' : true} // If True Can Access The Home Page 

    return (
        auth.token ? <Outlet/> : <Navigate to ="/"/>
    )
}
export default  PrivateRoutes;