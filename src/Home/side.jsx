import React from 'react'
import Sidebar, { SidebarItem } from './Sidebar'
import { Link } from 'react-router-dom'


const Side = () => {
  return (
    <Sidebar >
    
    <Link to='/'><SidebarItem  text="Dashboard"  active={true} alert ></SidebarItem></Link>
    <Link to='/' ><SidebarItem  text="All Projects" active={true} alert ></SidebarItem></Link>
    <Link to='/quotation'><SidebarItem  text="Quotation" active={true} alert ></SidebarItem></Link>
    <Link to='/file'><SidebarItem  text="Files" active={true} alert ></SidebarItem></Link>
    <Link to='/'><SidebarItem  text="Timelines" active={true} alert ></SidebarItem></Link>
    <Link to='/'><SidebarItem  text="Task Manager" active={true} alert ></SidebarItem></Link>
    <Link to='/'><SidebarItem  text="MOM" active={true} alert ></SidebarItem></Link>
    <Link to='/'><SidebarItem  text="Moodboard" active={true} alert ></SidebarItem></Link>
    <Link to='/'><SidebarItem  text="Vender & PO's" active={true} alert ></SidebarItem></Link>
    <Link to='/'><SidebarItem  text="Chat" active={true} alert ></SidebarItem></Link>
     <Link to='/'><SidebarItem  text="Reports" active={true} alert ></SidebarItem></Link> 

    </Sidebar>
  )
}

export default Side