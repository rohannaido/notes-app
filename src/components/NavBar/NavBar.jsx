import './NavBar.css'
import LoginButton from '../LoginButton/LoginButton';

const NavBar = () => {
    return (
        <div className='navBar'>
            <div>
                <h1>Notes</h1>
            </div>
            <div>
                <input type='text' />
            </div>
            <div>
                <LoginButton />
            </div>
        </div>
    )
}

export default NavBar;