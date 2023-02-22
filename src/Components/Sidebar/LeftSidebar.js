import React from 'react';
import { AiOutlineAppstore, AiOutlineRead, AiOutlinePoweroff } from "react-icons/ai";
import { BsChevronRight, BsChevronDoubleLeft } from "react-icons/bs";
import { HiOutlineCog } from "react-icons/hi";
import { VscMegaphone } from "react-icons/vsc";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { BiBarChartAlt2 } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function LeftSidebar({handleClick}) {
  return (
    <section className='left-sidebar'>
        <div className='sidebar-body d-flex flex-column justify-content-between py-3'>
            <Button className='toggle-btn mt-2' onClick={handleClick}>
                <BsChevronDoubleLeft size={14} />
            </Button>
            <div className='sidebar-top d-flex'>
                <img className='logo' src={'/images/newson-logo.png'} alt='' />
                <span>Newson</span>
            </div>
            <div className='main-menu'>

                <NavLink to={'/dashboard'} className='d-flex align-items-center menu-item link py-2' >
                    <div className='menu-icon'>
                        <AiOutlineAppstore />
                    </div>
                    <span>Dashboard</span>
                </NavLink>

                <NavLink to={'/outreach'} className='d-flex align-items-center menu-item link py-2' >
                    <div className='menu-icon'>
                        <VscMegaphone />
                    </div>
                    <span>Outreach</span>
                </NavLink>

                <NavLink to={'/prospects'} className='d-flex align-items-center menu-item link py-2' >
                    <div className='menu-icon'>
                        <AiOutlineRead />
                    </div>
                    <span>Prospects</span>
                </NavLink>

                <NavLink to={'/inbox'} className='d-flex align-items-center menu-item link py-2' >
                    <div className='menu-icon'>
                        <IoChatboxEllipsesOutline />
                    </div>
                    <span>Inbox</span>
                    <p className='unread-count ms-3 mb-0'>10</p>
                </NavLink>

                <NavLink to={'/insights'} className='d-flex align-items-center menu-item link py-2' >
                    <div className='menu-icon'>
                        <BiBarChartAlt2 />
                    </div>
                    <span>Insights</span>
                </NavLink>

                <NavLink to={'/settings'} className='d-flex align-items-center menu-item link py-2' >
                    <div className='menu-icon'>
                        <HiOutlineCog />
                    </div>
                    <span>Settings</span>
                </NavLink>

            </div>

            <div className='sidebar-bottom'>
                <div className='d-flex align-items-center menu-item account pt-3'>
                    <div className='account-photo'>
                        <img src='/images/testimonee.jpg' alt='' />
                        <div className='status-dot'></div>
                        <hr />
                    </div>
                    <div className='account-info'>
                        <p className='fw-600 mb-0'>Chris Evans</p>
                        <p className='email mb-0'>chris.evans@gmail.com</p>
                        <hr />
                        <BsChevronRight size={15} />
                    </div>
                </div>
                <NavLink to={'/login'} className='d-flex align-items-center menu-item link' >
                    <div className='menu-icon'>
                        <AiOutlinePoweroff />
                    </div>
                    <span>Logout</span>
                </NavLink>
            </div>
        </div>
    </section>
  )
}
