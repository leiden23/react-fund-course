import { Route, Routes, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../../router';
import { useContext } from 'react';
import { AuthContext } from '../../context';
import Loader from './Loader/Loader';


const AppRouter = () => {
    const {isAuth, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <Loader />
    }

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map((route) => 
                    <Route
                        element={<route.element />}
                        path={route.path}
                        exact={route.exact}
                        key={route}
                    />
                )}
                <Route path="*" element={<Navigate to="/posts" replace />} />
            </Routes>
            :
            <Routes>
                {publicRoutes.map((route) => 
                    <Route
                        element={<route.element />}
                        path={route.path}
                        exact={route.exact}
                        key={route}
                    />
                )}
                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
    )
}

export default AppRouter