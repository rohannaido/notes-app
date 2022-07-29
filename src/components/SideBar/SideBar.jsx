import './SideBar.css'
import { AiOutlineBulb, AiOutlineClockCircle, AiOutlineDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const SideBar = ({drawer}) => {
    return (
        <div className={`sideBar ${drawer && 'show-sidebar'}`}>
            <ul>
                <Link to='/'>
                    <li className='active'>
                        <span className='sideBar_icon'>
                            <AiOutlineBulb />
                        </span>
                            Notes
                    </li>
                </Link>
                <Link to='/soon'>
                    <li className=''>
                        <span className='sideBar_icon'>
                            <AiOutlineClockCircle />
                        </span>
                        Reminders
                    </li>
                </Link>
                <Link to='/soon'>
                    <li className=''>
                        <span className='sideBar_icon'>
                            <AiOutlineBulb />
                        </span>
                        Projects
                    </li>
                </Link>
                <Link to='/soon'>
                    <li className=''>
                        <span className='sideBar_icon'>
                            <AiOutlineDelete />
                        </span>
                        Bin
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default SideBar;