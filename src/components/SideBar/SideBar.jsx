import './SideBar.css'
import { AiOutlineBulb, AiOutlineClockCircle, AiOutlineDelete } from 'react-icons/ai'

const SideBar = () => {
    return (
        <div className='sideBar'>
            <ul>
                <li className='active'>
                    <span className='sideBar_icon'>
                        <AiOutlineBulb />
                    </span>
                        Notes
                </li>
                <li className=''>
                    <span className='sideBar_icon'>
                        <AiOutlineClockCircle />
                    </span>
                    Reminders
                </li>
                <li className=''>
                    <span className='sideBar_icon'>
                        <AiOutlineBulb />
                    </span>
                    Projects
                </li>
                <li className=''>
                    <span className='sideBar_icon'>
                        <AiOutlineDelete />
                    </span>
                    Bin
                </li>
            </ul>
        </div>
    )
}

export default SideBar;