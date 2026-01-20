import Posts from '../../pages/Posts'
import { Route, Routes } from 'react-router-dom';
import { routes } from '../../router';
import About from '../../pages/About'
import PostIdPage from '../../pages/PostIdPage';
// import Posts from '../../pages/Posts';


const AppRouter = () => {
    return (
        <Routes>
          {routes.map((route) => (
            <Route 
                element={<route.element/>} 
                path={route.path} 
                exact={route.exact}
            />
          ))}
        </Routes>
    )
}

export default AppRouter