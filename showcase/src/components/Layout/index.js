import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import CustomCursor from '../CustomCursor';
import './index.scss'

const Layout = () => { 
    return(
        <div className = "App">
            <Sidebar />
            <CustomCursor />
            <div className = "page">
                <Outlet />
            </div>
        </div>
    ) 
}

export default Layout
