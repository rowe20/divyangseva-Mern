import React from 'react'
import { CloseIcon, 
    Icon, 
    SidebarContainer, 
    SidebarLink, 
    SidebarMenu, 
    SidebarRoute, 
    SidebarWrapper,
    SideBtnWrap} from './SideBarElement'
import { SignContext } from '../../context/SignContext'


const Sidebar = ({toggle,isOpen}) => {
const signStatuscheck = React.useContext(SignContext);
const signButton = React.useContext(SignContext);
const changeSignComponent =(status)=>{
  if(status === "signin")
  {
    signButton.setsignStatus("signin")
    console.log(signButton.signStatus);
  }
  else{
    signButton.setsignStatus("signup")
    console.log(signButton.signStatus);
  }

}
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}>
                    About
                </SidebarLink>
                <SidebarLink to="sports" onClick={toggle}>
                    Sports 
                </SidebarLink>
                <SidebarLink to="services" onClick={toggle}>
                    Services
                </SidebarLink>
                <SidebarLink to="help" onClick={toggle}>
                    Help
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
              {signStatuscheck.signStatus ===""&&<>
              <SidebarRoute onClick={() => changeSignComponent("signin")} to="/signin">Log In</SidebarRoute>
                <SidebarRoute onClick={() => changeSignComponent("signup")} to="/signin">Register</SidebarRoute>
              </>}
              {signStatuscheck.signStatus ==="loggedin"&&<>
              <SidebarRoute onClick={() => {changeSignComponent("");window.location.reload();}} to="/">Log Out</SidebarRoute>
              </>}
                </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar