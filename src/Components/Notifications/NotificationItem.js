import React from 'react';
import { IoChatboxEllipsesOutline, IoCalendarOutline, IoNotificationsOutline, IoAlertOutline } from "react-icons/io5";

export default function NotificationItem({data}) {
    const whichNotif = (type) => {
        switch (type) {
            case 'response':
                return <IoChatboxEllipsesOutline />;
            case 'meeting':
                return <IoCalendarOutline />;
            case 'alert':
                return <IoAlertOutline />;
            default:
                return <IoNotificationsOutline />;
        }
    }
  return (
    <div className='notification-item px-2 py-2'>
        <div className='d-flex'>
            <div className='icon me-2'>
                { whichNotif(data.type) }
            </div>
            <div className='info'>
                <p className='title fw-600 mb-0'>{data.title}</p>
                <p className='text mb-0'>{data.text}</p>
                <p className='time text-end mb-0'>{data.time}</p>
            </div>
        </div>
    </div>
  )
}
