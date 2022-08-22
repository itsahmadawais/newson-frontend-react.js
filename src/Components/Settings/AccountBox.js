import React, { useState } from 'react';
import { Form, Dropdown } from 'react-bootstrap';
import { HiOutlineDotsVertical } from "react-icons/hi";

export default function AccountBox({data}) {
  const [status, setStatus] = useState(data.status);
  return (
    <div className='account-box box-card p-3 me-3 mb-3'>
        <Dropdown autoClose='outside'>
            <Dropdown.Toggle variant='primary' className='me-2'>
                <HiOutlineDotsVertical size={20} />
            </Dropdown.Toggle>
            <Dropdown.Menu className='p-2'>
                <Form.Check
                    type='radio'
                    id={'connect-status-'+data.id}
                    value='connected'
                    label='Connect'
                    onChange={e => setStatus(e.target.value)}
                    checked={status === 'connected' ? true : false}
                    />
                <Form.Check
                    type='radio'
                    id={'pause-status-'+data.id}
                    value='paused'
                    label='Pause'
                    onChange={e => setStatus(e.target.value)}
                    checked={status === 'paused' ? true : false}
                    />
                <Form.Check
                    type='radio'
                    id={'disconnect-status-'+data.id}
                    value='disconnected'
                    label='Disconnect'
                    onChange={e => setStatus(e.target.value)}
                    checked={status === 'disconnected' ? true : false}
                    />
            </Dropdown.Menu>
        </Dropdown>
        <div className='d-flex'>
            <img src={data.image} alt='' />
            <div className='ms-3'>
                <div className='account-status d-flex align-items-center mb-1'>
                    <span className={status}></span>
                    <p>{status}</p>
                </div>
                <p className='email mb-0'>{data.email}</p>
            </div>
        </div>
    </div>
  )
}
