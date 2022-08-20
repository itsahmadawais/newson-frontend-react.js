import React, { useState, useEffect } from 'react';
import LeftSidebar from '../Components/Sidebar/LeftSidebar';
import RightSidebar from '../Components/Sidebar/RightSidebar';
import Topbar from '../Components/Topbar/Topbar';

export default function SidebarLayout({children, title}) {
  const [clicked, SetClicked] = useState(sessionStorage.getItem('sidebar-clicked') === 'true');

  useEffect(() => {
    sessionStorage.setItem('sidebar-clicked', clicked);
  }, [clicked]);

  const handleClick = () => {
      SetClicked(!clicked);
  }
  return (
    <section className='sidebar-layout'>
      <div className='container-fluid'>
        <div className='row g-0'>
          <div className='col-md-12'>
            <div className={clicked ? 'd-flex content-expand' : 'd-flex'}>
              <LeftSidebar handleClick={handleClick} />
              <div className='main-content flex-grow-1 ps-3'>
                <Topbar title={title} />
                <div className='d-flex'>
                    <div className='page-content custom-scrollbar flex-grow-1'>
                        {children}
                    </div>
                    <RightSidebar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
