import Navbar from './components/UI/Navbar/Navbar';
import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppRouter from './components/UI/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>  
    </BrowserRouter>
  )
}

export default App
