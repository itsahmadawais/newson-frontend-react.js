import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Tabs, Tab, Form } from 'react-bootstrap';
import { AiOutlinePlus } from "react-icons/ai";
import { MdFormatListBulleted, MdApps } from "react-icons/md";
import Searchbar from '../Inputs/Searchbar';
import OutreachBox from './OutreachBox';
import { useNavigate } from 'react-router-dom';

export default function OutreachContent() {
    const [listView, setListView] = useState(true);
    const navigate = useNavigate();

    const outreach = [
        {
            id: '1',
            status: true,
            title: 'Camp Title 1',
            progress: '0',
            createdAt: '2 hours ago',
            steps: '3',
            added: '0',
            contacted: '0',
            replied: '0',
            lead: '0',
            meeting: '0',
            deal: '0',
            accepted: '0',
            rejected: '0',
            createdBy: {
                image: '/images/testimonee.jpg',
                name: 'Bob Marley'
            },
            topPerformer: true,
            members: [
                {
                    id: '1',
                    image: '/images/testimonee.jpg'
                },
                {
                    id: '2',
                    image: '/images/testimonee.jpg'
                },
                {
                    id: '3',
                    image: '/images/testimonee.jpg'
                },
                {
                    id: '4',
                    image: '/images/testimonee.jpg'
                }
            ]
        },
        {
            id: '2',
            status: true,
            title: 'Camp Title 2',
            progress: '0',
            createdAt: '2 hours ago',
            steps: '3',
            added: '0',
            contacted: '0',
            replied: '0',
            lead: '0',
            meeting: '0',
            deal: '0',
            accepted: '0',
            rejected: '0',
            createdBy: {
                image: '/images/testimonee.jpg',
                name: 'Bob Marley'
            },
            topPerformer: false,
            members: [
                {
                    id: '1',
                    image: '/images/testimonee.jpg'
                },
                {
                    id: '2',
                    image: '/images/testimonee.jpg'
                },
                {
                    id: '3',
                    image: '/images/testimonee.jpg'
                },
                {
                    id: '4',
                    image: '/images/testimonee.jpg'
                }
            ]
        },
        {
            id: '3',
            status: false,
            title: 'Camp Title 3',
            progress: '0',
            createdAt: '2 hours ago',
            steps: '3',
            added: '0',
            contacted: '0',
            replied: '0',
            lead: '0',
            meeting: '0',
            deal: '0',
            accepted: '0',
            rejected: '0',
            createdBy: {
                image: '/images/testimonee.jpg',
                name: 'Bob Marley'
            },
            topPerformer: false,
            members: [
                {
                    id: '1',
                    image: '/images/testimonee.jpg'
                },
                {
                    id: '2',
                    image: '/images/testimonee.jpg'
                },
                {
                    id: '3',
                    image: '/images/testimonee.jpg'
                },
                {
                    id: '4',
                    image: '/images/testimonee.jpg'
                }
            ]
        }
    ];

    const orderby = [
        {
            id: '1',
            value: 'most-recent',
            label: 'Most Recent'
        },
        {
            id: '2',
            value: 'top-performer',
            label: 'Top Performer'
        },
        {
            id: '3',
            value: 'low-performer',
            label: 'Low Performer'
        }
    ];

    const folders = [
        {
            id: '1',
            value: 'all',
            label: 'All'
        },
        {
            id: '2',
            value: 'folder-1',
            label: 'Folder 1'
        },
        {
            id: '3',
            value: 'folder-2',
            label: 'Folder 2'
        }
    ];

  return (
    <div className='outreach-content'>
        <div className='row g-0'>
            <div className='col-md-12'>
                <div className='content-top d-flex justify-content-between'>
                    <Searchbar />
                    <div className='d-flex align-items-center justify-content-end'>
                        <Form.Select>
                            {
                                orderby.map((item) => {
                                    return <option key={item.id} value={item.value}>{item.label}</option>
                                })
                            }
                        </Form.Select>
                        <Form.Select>
                            {
                                folders.map((item) => {
                                    return <option key={item.id} value={item.value}>{item.label}</option>
                                })
                            }
                        </Form.Select>
                        <Button variant='primary'>New Folder <AiOutlinePlus size={18} /></Button>
                    </div>
                </div>
                <div className='breadcrumbs mt-3'>
                    <p>Outreach &gt; All</p>
                </div>
                <div className='content-section secondary-bg p-3'>
                    <div className='outreach-btns d-flex justify-content-end'>
                        <Button variant='toggle' className={listView ? 'active me-2' : 'me-2'} onClick={() => setListView(true)}>
                            <MdFormatListBulleted size={18} />
                        </Button>
                        <Button variant='toggle' className={!listView ? 'active me-2' : 'me-2'} onClick={() => setListView(false)}>
                            <MdApps size={18} />
                        </Button>
                        <Button variant='primary' onClick={() => navigate('/outreach/create')}>
                            Add New <AiOutlinePlus size={18} />
                        </Button>
                    </div>
                    <Tabs
                        defaultActiveKey="my-outreach"
                        id="outreach-tabs"
                        className="custom-tabs pb-3"
                        >
                        <Tab eventKey="my-outreach" title="My Outreach">
                            {
                                listView ?
                                outreach.map((item) => {
                                    return <OutreachBox key={item.id} data={item} listView={listView} />
                                }) :
                                <div className='d-flex flex-wrap'>
                                    {
                                        outreach.map((item) => {
                                            return <OutreachBox key={item.id} data={item} listView={listView} />
                                        })
                                    }
                                </div>
                            }
                        </Tab>
                        <Tab eventKey="all-outreach" title="All Outreach">
                            {
                                listView ?
                                outreach.map((item) => {
                                    return <OutreachBox key={item.id} data={item} listView={listView} />
                                }) :
                                <div className='d-flex flex-wrap'>
                                    {
                                        outreach.map((item) => {
                                            return <OutreachBox key={item.id} data={item} listView={listView} />
                                        })
                                    }
                                </div>
                            }
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    </div>
  )
}
