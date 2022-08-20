import React from 'react'
import CountIconBox from './CountIconBox';
import GraphBox from './GraphBox';
import ListBox from './ListBox';

export default function DashboardContent() {
  const iconBoxes = [
    {
      id: '1',
      icon: 'campaign',
      totalValue: '20',
      title: 'Active Campaigns',
    },
    {
      id: '2',
      icon: 'message',
      totalValue: '87',
      title: 'Unread Messages',
    }
  ];

  const items = [
    {
        id: '1',
        image: '/images/testimonee.jpg',
        name: 'Chris Evans',
        date: '25 July',
        time: '1:30 pm'
    },
    {
        id: '2',
        image: '/images/testimonee.jpg',
        name: 'Chris Evans',
        date: '25 July',
        time: '1:30 pm'
    },
    {
        id: '3',
        image: '/images/testimonee.jpg',
        name: 'Chris Evans',
        date: '25 July',
        time: '1:30 pm'
    },
    {
        id: '4',
        image: '/images/testimonee.jpg',
        name: 'Chris Evans',
        date: '25 July',
        time: '1:30 pm'
    },
    {
        id: '5',
        image: '/images/testimonee.jpg',
        name: 'Chris Evans',
        date: '25 July',
        time: '1:30 pm'
    },
    {
        id: '6',
        image: '/images/testimonee.jpg',
        name: 'Chris Evans',
        date: '25 July',
        time: '1:30 pm'
    }
  ];

  return (
    <section className='dashboard-content secondary-bg p-3'>
        <div className='row g-0'>
            <div className='col-md-8'>
                <div className='banner box-card px-4 py-5 d-flex align-items-center'>
                    <img src='/images/testimonee.jpg' alt='' className='emp-img' />
                    <div className='ms-4'>
                        <div className='d-flex align-items-center mb-2'>
                            <h4 className='mb-0'>Chris Evans</h4>
                            <img src='/images/trophy.png' alt='' className='trophy-img ms-2' />
                        </div>
                        <p className=' fw-600 mb-0'>Sales Rep of the Week</p>
                    </div>
                </div>
            </div>
            <div className='col-md-4 ps-3'>
                {
                    iconBoxes.map((item) => {
                        return <CountIconBox  key={item.id} data={item} />
                    })
                }
            </div>
        </div>
        <div className='row g-0'>
          <div className='col-md-6 pe-4'>
            <h6 className='mt-4'>Upcoming Meetings</h6>
            <ListBox items={items} />
            <h6 className='mt-4'>Last Booked Meetings</h6>
            <ListBox items={items} />
          </div>
          <div className='col-md-6'>
            <h6 className='mt-4'>Number of Leads</h6>
            <GraphBox />
            <h6 className='mt-4'>Number of Appointments</h6>
            <GraphBox />
          </div>
        </div>
    </section>
  )
}
