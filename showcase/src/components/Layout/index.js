// import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
// import Home from '../Home'
import './index.scss'

const Layout = () => {
    return (
      <div className="App">
      <Sidebar />
      {/* <Home /> */}
      </div>
    )
  }
  
  export default Layout