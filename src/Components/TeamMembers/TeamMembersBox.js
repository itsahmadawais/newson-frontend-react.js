import React from 'react';
import { Button } from 'react-bootstrap'
import SingleMember from './SingleMember';

export default function TeamMembersBox() {
    const members = [
        {
            id: '1',
            image: '/images/testimonee.jpg',
            name: 'Chris Evans'
        },
        {
            id: '2',
            image: '/images/testimonee.jpg',
            name: 'Millie Bobby'
        },
        {
            id: '3',
            image: '/images/testimonee.jpg',
            name: 'Chris Evans'
        },
        {
            id: '4',
            image: '/images/testimonee.jpg',
            name: 'Chris Evans'
        },
        {
            id: '5',
            image: '/images/testimonee.jpg',
            name: 'Chris Evans'
        },
        {
            id: '6',
            image: '/images/testimonee.jpg',
            name: 'Chris Evans'
        },
        {
            id: '7',
            image: '/images/testimonee.jpg',
            name: 'Chris Evans'
        },
        {
            id: '8',
            image: '/images/testimonee.jpg',
            name: 'Chris Evans'
        },
        {
            id: '9',
            image: '/images/testimonee.jpg',
            name: 'Chris Evans'
        },
        {
            id: '10',
            image: '/images/testimonee.jpg',
            name: 'Chris Evans'
        }
        
    ];

  return (
    <div className='right-sidebar-box py-2 mb-3 primary-bg'>
        <div className='box-head mb-2 mx-2'>
            <p className='fw-600 mb-2'>Team Members</p>
        </div>
        <div className='d-flex flex-wrap mx-2'>
            {
                members.slice(0, 8).map((item) => {
                    return <SingleMember key={item.id} data={item} />
                })
                
            }
            {
                members.length > 8 ? 
                <div className='single-member text-center'>
                    <div className='more d-flex align-items-center justify-content-center'>+{ members.slice(8).length }</div>
                    <p className='fw-600 mb-0'>More</p>
                </div> : ''
            }
        </div>
        <div className='box-foot mt-2 mx-2'>
            <Button className='w-100 pb-0'>View All</Button>
        </div>
    </div>
  )
}
