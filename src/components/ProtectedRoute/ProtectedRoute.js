import React from "react";
import {Route, Redirect} from "react-router-dom";

const ProtectedRoute = ({component: Component, ...props}) => {
    return (
        <Route>
{   
    ((props.loggedIn) && (<Component {...props} />) ||
    (props.loggedIn == false) && (<Redirect to="/sign-up"/>))
}
        </Route>
    );
};

export default ProtectedRoute;