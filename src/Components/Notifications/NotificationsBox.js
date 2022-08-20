import React from 'react';
import { Button } from 'react-bootstrap';
import { BiDotsVerticalRounded } from "react-icons/bi";
import NotificationItem from './NotificationItem';

export default function NotificationsBox() {
    const notifications = [
        {
            id: '1',
            type: 'response',
            title: 'New Response',
            text: 'Calvin Murphy replied to your message “Yeah that’s cool! I’ll be there.”',
            time: '2:34 pm'
        },
        {
            id: '2',
            type: 'meeting',
            title: 'New Meeting Booked',
            text: 'Jenny just booked a call with Sam.',
            time: '2:34 pm'
        },
        {
            id: '3',
            type: 'alert',
            title: 'Account Alert not connected to linkedin',
            text: 'Your LinkedIn account has authentication problem.',
            time: '2:34 pm'
        },
        {
            id: '4',
            type: 'response',
            title: 'New Response',
            text: 'Calvin Murphy replied to your message “Yeah that’s cool! I’ll be there.”',
            time: '2:34 pm'
        }
        
    ];
  return (
    <div className='right-sidebar-box py-2 secondary-bg'>
        <div className='box-head mb-2 mx-2 d-flex justify-content-between'>
            <p className='fw-600 mb-2'>Notifications</p>
            <BiDotsVerticalRounded size={20} />
        </div>
        <div className='notification-content custom-scrollbar'>
            {
                notifications.map((item) => {
                    return <NotificationItem key={item.id} data={item} />
                })
            }
        </div>
        <div className='box-foot mt-2 mx-2'>
            <Button className='w-100 pb-0'>View All</Button>
        </div>
    </div>
  )
}
