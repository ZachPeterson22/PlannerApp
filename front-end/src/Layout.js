import { Link, Outlet, useNavigate } from "react-router-dom";
import './Layout.css';
import { useEffect, useState } from "react";

function Layout() {
    const [selected, setSelected] = useState('/');

    const TABS = [
        {
            page: 'Home/Calendar',
            route: '/'
        },
        {
            page: 'Add Event',
            route: 'addEvent'
        },
        {
            page: 'Notes',
            route: 'notes'
        }
    ]

    const setToSelected = (route) => {
        setSelected(route)
    }

    const navigate = useNavigate();
    
    useEffect(() => {
        navigate(selected);
    }, [])

    return (
        <div className='layout'>
            <div className='navbar'>
                {TABS.map((tab, index) => {
                    return <Link 
                        key={index} 
                        to={tab.route}
                        className={selected === tab.route ? 'selected-nav-item' : 'nav-item'} 
                        onClick={() => setToSelected(tab.route)}
                    >
                        {tab.page}
                    </Link>
                })}
            </div>

            <Outlet />
        </div>
    )
}

export default Layout;