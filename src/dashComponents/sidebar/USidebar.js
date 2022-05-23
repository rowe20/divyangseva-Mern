import "./Sidebar.css";
import logo from "../../dashComponents/assets/logo.png";
import { Link } from "react-router-dom";
import {FaTimes,FaHome,FaCertificate} from 'react-icons/fa'

//onClick={()=>SetNavRedirect('dasboard')}
const Sidebar = ({ sidebarOpen, closeSidebar,NavRedirect,SetNavRedirect }) => {

  // const addClass = () =>{
  //   document.querySelector("dashboard").classList.add("active_menu_link");
  // }


  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>Divyang Seva</h1>
        </div>
        <i><FaTimes onClick={() => closeSidebar()}/></i>
      </div>

      {/* User sideNav */}
      <div className="sidebar__menu">
        <div id="dashboard" className="sidebar__link">
          <i><FaHome/></i>
          <a href="#">Dashboard</a>
        </div>
        <h2>MNG</h2>
        <div id="certificate" className="sidebar__link">
          <i aria-hidden="true"><FaCertificate/></i>
          <a href="#">Apply For Certificate</a>
        </div>
        <div id="status" className="sidebar__link">
          <i className="fa fa-building-o"></i>
          <a href="#">View Status</a>
        </div>
        
        <h2>User Side</h2>
        <div id="profile" className="sidebar__link">
          <i className="fa fa-question"></i>
          <a href="#">Profile</a>
        </div>
        
        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <a href="#">Log out</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
