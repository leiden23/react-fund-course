import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navBar'>
            <div className='navBar__items'>
                <Link to="/about">О сайте</Link>
                <Link to="/posts">Посты</Link>
            </div>
        </div>
    )
}

export default Navbar;