import Navbar from './components/UI/Navbar/Navbar';
import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppRouter from './components/UI/AppRouter';
import { AuthContext } from './context';
import { useEffect, useState } from 'react';

function App() {
    
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
        setIsLoading(false)
    }, [])


    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading,
        }}>
            <BrowserRouter>
                <Navbar />
                <AppRouter />
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App
