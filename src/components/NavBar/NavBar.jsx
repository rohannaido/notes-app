import './NavBar.css'
import LoginButton from '../LoginButton/LoginButton';
import { GiHamburgerMenu } from 'react-icons/gi'

const NavBar = ({setDrawer}) => {
    return (
        <div className='navBar'>
            <div className='navBar_logoMenuDiv'>
                <div className='navBar_menuIcon' onClick={() => setDrawer(prev => !prev)}>
                        <GiHamburgerMenu />
                    </div>
                <div>
                    <h1 className='navBar_logo'>Productiv</h1>
                </div>
            </div>
            {/* <div>
                <input type='text' />
            </div> */}
            <div>
                <LoginButton />
            </div>
        </div>
    )
}

export default NavBar;