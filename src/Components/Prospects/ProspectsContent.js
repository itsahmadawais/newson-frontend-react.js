import React, { useState, useRef } from 'react';
import { HiDownload } from "react-icons/hi";
import { BiFilterAlt } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";
import { VscMegaphone } from "react-icons/vsc";
import { BsBarChart, BsReply } from "react-icons/bs";
import { IoPricetagOutline } from "react-icons/io5";
import { AiOutlineUser, AiOutlineEye } from "react-icons/ai";
import { Dropdown, Button, Form, Accordion, Tabs, Tab } from 'react-bootstrap';
import Searchbar from '../Inputs/Searchbar';
import ProspectItem from './ProspectItem';

export default function ProspectsContent() {
  const [peopleCount, setPeopleCount] = useState(0);
  const peopleCountRef = useRef(null);

  const outreach = [
    {
      id: '20',
      title: 'Camp Title 1'
    },
    {
      id: '21',
      title: 'Camp Title 2'
    },
    {
      id: '22',
      title: 'Camp Title 3'
    }
  ];

  const statuses = [
    {
      id: '23',
      title: 'Waiting in queue'
    },
    {
      id: '24',
      title: 'Contacted'
    },
    {
      id: '25',
      title: 'Connected'
    },
    {
      id: '26',
      title: 'Unconnectable'
    },
    {
      id: '27',
      title: 'Got Reply'
    },
    {
      id: '28',
      title: 'Lead'
    },
    {
      id: '29',
      title: 'Customer'
    }
  ];

  const profileOptions = [
    {
        id: '30',
        title: 'Default'
    },
    {
        id: '31',
        title: 'Opened'
    },
    {
        id: '32',
        title: 'Closed'
    }
  ];

  const viewedOptions = [
    {
        id: '33',
        title: 'Default'
    },
    {
        id: '34',
        title: 'Viewed'
    },
    {
        id: '35',
        title: 'Not Viewed'
    }
  ];

  const prospects = [
    {
        id: '36',
        photo: '/images/testimonee.jpg',
        name: 'Chris Evans',
        status: 'Connected',
        position: 'Digital Marketer & Social  Media Manager',
        company: 'upwork.com',
        enrichEmail: 'No Enriched Emails',
        workPersEmail: 'No Emails'
    },
    {
        id: '37',
        photo: '/images/testimonee.jpg',
        name: 'Chris Evans',
        status: 'Replied',
        position: 'Digital Marketer & Social  Media Manager',
        company: 'upwork.com',
        enrichEmail: 'No Enriched Emails',
        workPersEmail: 'No Emails'
    },
    {
        id: '38',
        photo: '/images/testimonee.jpg',
        name: 'Chris Evans',
        status: 'Connected',
        position: 'Digital Marketer & Social  Media Manager',
        company: 'upwork.com',
        enrichEmail: 'No Enriched Emails',
        workPersEmail: 'No Emails'
    }
  ];

  return (
    <div className='prospects-content'>
        <div className='row g-0'>
            <div className='col-md-12'>
                <div className='content-top d-flex justify-content-between mb-3'>
                    <div className='d-flex'>
                        <Dropdown className='people-count-filter' autoClose='outside'>
                            <Dropdown.Toggle variant='primary' className='filter-dropdown me-2'>
                                <span>{peopleCount}</span>
                                <FiChevronDown size={16} className='ms-2' />
                            </Dropdown.Toggle>
                            <Dropdown.Menu className='p-2'>
                                <div className='d-flex align-items-center mb-2'>
                                    <Form.Label className='me-2'>Select no. of people</Form.Label>
                                    <Form.Control type='number' name='select-people-count' ref={peopleCountRef} />
                                </div>
                                <Button 
                                    variant='primary'
                                    className='w-100 p-1'
                                    onClick={() => setPeopleCount(peopleCountRef.current.value)}
                                    >
                                    Apply Selection
                                </Button>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Searchbar />
                        <Button variant='primary' className='ms-2'>Export as CSV <HiDownload size={18} /></Button>
                    </div>
                    <div>
                        <Dropdown autoClose='outside'>
                            <Dropdown.Toggle variant='primary' className='filter-dropdown'>
                                <BiFilterAlt size={20} />
                                <FiChevronDown size={16} className='ms-2' />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <div className='filter-section px-3 py-2'>
                                    <p className='fw-600'>Filters</p>
                                    <Searchbar />
                                    <Accordion className='mt-2' flush>
                                        <Accordion.Item eventKey="3-0" className='mb-2'>
                                            <Accordion.Header>
                                                <IoPricetagOutline size={17} className='me-3' /> Labels
                                            </Accordion.Header>
                                            <Accordion.Body>

                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3-1" className='mb-2'>
                                            <Accordion.Header>
                                                <VscMegaphone size={15} className='me-3' /> Outreach
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <Form.Check 
                                                    type='radio'
                                                    id={'outreach-outside'}
                                                    name={'outreach'}
                                                    label='Show prospects outside outreach'
                                                />
                                                {outreach.map(function(item){
                                                    return <Form.Check 
                                                        type='radio'
                                                        id={'outreach-'+item.id}
                                                        name={'outreach'}
                                                        label={item.title}
                                                    />;
                                                })}
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3-2" className='mb-2'>
                                            <Accordion.Header>
                                                <BsBarChart size={17} className='me-3' /> Statuses
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                {statuses.map(function(item){
                                                    return <Form.Check 
                                                        type='radio'
                                                        id={'period-'+item.id}
                                                        name={'periods'}
                                                        label={item.title}
                                                    />;
                                                })}
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3-3" className='mb-2'>
                                            <Accordion.Header>
                                                <AiOutlineUser size={17} className='me-3' /> Profile Options
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                {profileOptions.map(function(item){
                                                    return <Form.Check 
                                                        type='radio'
                                                        id={'period-'+item.id}
                                                        name={'periods'}
                                                        label={item.title}
                                                    />;
                                                })}
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3-4" className='mb-2'>
                                            <Accordion.Header>
                                                <AiOutlineEye size={17} className='me-3' /> Viewed Options
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                {viewedOptions.map(function(item){
                                                    return <Form.Check 
                                                        type='radio'
                                                        id={'period-'+item.id}
                                                        name={'periods'}
                                                        label={item.title}
                                                    />;
                                                })}
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3-5" className='mb-2'>
                                            <Accordion.Header>
                                                <BsReply size={17} className='me-3' /> Replied After
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                    <Button variant='primary' className='w-100 p-1'>Apply Filters</Button>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div className='content-section secondary-bg p-3'>
                    <Tabs
                        defaultActiveKey="my-prosps"
                        id="prospects-tabs"
                        className="custom-tabs pb-3"
                        >
                        <Tab eventKey="my-prosps" title="My Prospects">
                            <div className='prospects-wrap px-3 py-1'>
                                <table className='table table-borderless align-middle prospects-table'>
                                    <thead>
                                        <tr>
                                            <th>Photo</th>
                                            <th>Name</th>
                                            <th>Position / Company</th>
                                            <th>Enriched Email</th>
                                            <th>Work / Personal Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {prospects.map(function(item){
                                            return <ProspectItem key={item.id} data={item} />
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </Tab>
                        <Tab eventKey="search-prosps" title="Search Prospects">
                                    
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    </div>
  )
}
