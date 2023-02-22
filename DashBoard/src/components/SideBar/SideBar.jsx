import React from 'react'
import { Link } from 'react-router-dom'
import './SideBar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FeedbackIcon from '@mui/icons-material/Feedback';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

export default function SideBar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">DashBoard</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem"> 
                <Link to='/'>
                <LineStyleIcon className='sidebarIcon'/>
                Home
                </Link>
                </li>
                <li className="sidebarListItem "> 
                <TimelineIcon className='sidebarIcon'/>
                Analitycs
                </li>
                <li className="sidebarListItem "> 
                <TrendingUpIcon className='sidebarIcon'/>
                Users
                </li>
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem"> 
                <Link to='/users'> 
                <PersonIcon className='sidebarIcon'/>
                User
                </Link>
                </li>
                <li className="sidebarListItem "> 
                <Link to='/products'> 
                <InventoryIcon className='sidebarIcon'/>
                Products
                </Link>
                </li>
                <li className="sidebarListItem "> 
                <EqualizerIcon className='sidebarIcon'/>
                Reports
                </li>
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem"> 
                <MailOutlineIcon className='sidebarIcon'/>
                Mail
                </li>
                <li className="sidebarListItem "> 
                <FeedbackIcon className='sidebarIcon'/>
                Feedback
                </li>
                <li className="sidebarListItem "> 
                <ChatBubbleOutlineIcon className='sidebarIcon'/>
                Messages
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}
