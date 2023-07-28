import { Navigate, Outlet } from "react-router-dom"
export type ProtectedRouteTypes = {

    username: string
}
const ProtectedRoute = ({ username }: ProtectedRouteTypes) => {

    if (!username) {
        return <Navigate to='/' replace />;
    }

    return <Outlet />;

};
export default ProtectedRoute;
