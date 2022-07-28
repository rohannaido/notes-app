import './SideBar.css'
import { AiOutlineBulb } from 'react-icons/ai'

const SideBar = () => {
    return (
        <div className='sideBar'>
            <ul>
                <li className='active'>
                    <AiOutlineBulb />Notes
                </li>
            </ul>
        </div>
    )
}

export default SideBar;