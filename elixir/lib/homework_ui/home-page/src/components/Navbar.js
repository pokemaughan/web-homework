import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {AiOutlineClose} from "react-icons/all";
import {FaBars} from "react-icons/fa";
import {SidebarData} from "./SidebarData";
import './Navbar.css'
import {IconContext} from "react-icons";


function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar); //update the value to the opposite of what it is. true/false toggle

    return (
        <div>
            <IconContext.Provider value={{color: '#c7a3cc'}}>
            <div className="navBar">
                <Link to="#" className='menu-bars'>
                    <FaBars onClick={showSidebar}/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li className="navbar-toggle">
                        <Link to="#" className='menu-bars'>
                            <AiOutlineClose onClick={showSidebar}/>
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return(
                            <li key={index} class={item.className}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </div>
    )
}

export default Navbar

