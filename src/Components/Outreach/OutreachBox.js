import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { FiEye } from "react-icons/fi";
import { BiDotsVerticalRounded } from "react-icons/bi";

export default function OutreachBox({data, listView}) {
  return (
    <div className={listView ? 'outreach-box box-card p-3 mb-3' : 'outreach-box tile-view box-card p-3 mb-3'}>
        <div className='outreach-head d-flex justify-content-between'>
            <div className='outreach-head-start d-flex flex-wrap'>
                <div className='d-flex'>
                    {data.status ?
                    <Form.Check
                        type='checkbox'
                        name='outreach-status-input'
                        defaultChecked
                    /> :
                    <Form.Check
                        type='checkbox'
                        name='outreach-status-input'
                    />}
                    <div className='ms-2 me-4'>
                        <p className='fw-600 mb-1'>{data.title}</p>
                        <div className='d-flex outreach-info'>
                            <p>{data.progress}% complete</p>
                            <p className='px-2'>-</p>
                            <p>{data.createdAt}</p>
                            <p className='px-2'>-</p>
                            <p>{data.steps} steps</p>
                        </div>
                    </div>
                </div>
                <div className='members d-flex align-items-center'>
                    {
                        data.members.slice(0,2).map((item) => {
                            return <img key={item.id} src={item.image} alt='' />
                        })
                    }
                    {
                        data.members.length > 2 ?
                        <div className='more d-flex align-items-center justify-content-center'>
                            +{ data.members.slice(2).length }
                        </div> :
                        ''
                    }
                    <p className='members-count mb-0 ms-3'>{data.members.length} Members</p>
                </div>
            </div>
            <div className='outreach-head-end'>
                <div className='outreach-actions d-flex'>
                    <Button variant='action' className='me-2'>
                        <FiEye size={18} />
                    </Button>
                    <Button variant='action'>
                        <BiDotsVerticalRounded size={18} />
                    </Button>
                </div>
            </div>
        </div>
        <div className='outreach-body mt-3 pt-3 d-flex flex-wrap justify-content-between align-item-center'>
            <div className='outreach-details d-flex align-items-center py-2 text-center'>
                <div className='cell'>
                    <p>Added</p>
                    <p>{data.added}</p>
                </div>
                 <div className='cell'>
                    <p>Contacted</p>
                    <p>{data.contacted}</p>
                </div>
                <div className='cell'>
                    <p>Replied</p>
                    <p>{data.replied}</p>
                </div>
                <div className='cell'>
                    <p>Leads</p>
                    <p>{data.lead}</p>
                </div>
                <div className='cell'>
                    <p>Meetings</p>
                    <p>{data.meeting}</p>
                </div>
                <div className='cell'>
                    <p>Deals</p>
                    <p>{data.deal}</p>
                </div>
            </div>
            <div className='outreach-summary d-flex align-items-center'>
                <div className='cell d-flex align-items-center px-2 py-1 me-2'>
                    <p className='me-2'>{data.accepted}%</p>
                    <p>Accepted</p>
                </div>
                <div className='cell d-flex align-items-center px-2 py-1'>
                    <p className='me-2'>{data.rejected}%</p>
                    <p>Rejected</p>
                </div>
            </div>
        </div>
        <div className='outreach-foot d-flex justify-content-between mt-3 pt-3'>
            <div className='created-by d-flex align-items-center'>
                <img src={data.createdBy.image} alt='' />
                <div className='ms-3'>
                    <p>created by</p>
                    <p className='fw-600'>{data.createdBy.name}</p>
                </div>
            </div>
           {
            data.topPerformer ?
            <p className='outreach-badge mb-0 p-1 fw-600'>Top Performer</p> :
            ''
           }
        </div>
    </div>
  )
}
