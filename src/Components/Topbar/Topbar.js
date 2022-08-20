import React from 'react';
import { BiUser } from "react-icons/bi";
import { AiOutlinePoweroff } from "react-icons/ai";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { FiChevronDown } from "react-icons/fi";
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Topbar(props) {
  return (
    <section className='topbar py-3'>
        <div className='container'>
            <div className='row- g-0'>
                <div className='col-md-12'>
                    <div className='d-flex justify-content-between'>
                        <h2>{props.title}</h2>
                        <Dropdown align='end'>
                            <Dropdown.Toggle variant='company-menu'>
                                <div className='d-flex align-items-center'>
                                    <img src='/images/newson-logo.png' alt='' className='company-logo me-3' />
                                    <span className='user-name'>Company</span><FiChevronDown size={20} className='ms-2' />
                                </div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className='user-menu shadow-sm'>
                                <Dropdown.Item>
                                    <Link to='#' className='link'><BiUser size={20} /> User Settings</Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to='#' className='link'><HiOutlineSwitchHorizontal size={20} /> Switch Workspace</Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to='#' className='link'><TbAdjustmentsHorizontal size={20} /> Workspace Preferences</Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to='#' className='link'><AiOutlinePoweroff size={20} /> Logout</Link>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
