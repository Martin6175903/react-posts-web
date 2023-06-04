import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/routes";
import {AuthContext} from "../context/context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if(isLoading) {
        return <Loader/>
    }

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.element}
                        key={route.path}
                    >
                    </Route>
                )}
                {/*<Route path="/error" element={<Error/>}></Route>*/}
                <Route
                    path="*"
                    element={<Navigate to="/posts"/>}
                >
                </Route>
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.element}
                        key={route.path}
                    >
                    </Route>
                )}
                {/*<Route path="/error" element={<Error/>}></Route>*/}
                <Route
                    path="*"
                    element={<Navigate to="/login"/>}
                >
                </Route>
            </Routes>
    );
};

export default AppRouter;