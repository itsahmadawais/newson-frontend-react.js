import React, { useRef, useState } from 'react';
import { Form, Dropdown } from 'react-bootstrap';
import { FiChevronDown } from "react-icons/fi";
import InsightGraph from './InsightGraph';

export default function InsightsContent() {
  const [viewAccGraph1, setViewAccGraph1] = useState(true);
  const [viewAccGraph2, setViewAccGraph2] = useState(true);
  const [viewAccGraph3, setViewAccGraph3] = useState(false);
  const [viewAccGraph4, setViewAccGraph4] = useState(false);
  const [viewAccGraph5, setViewAccGraph5] = useState(false);
  const [viewAccGraph6, setViewAccGraph6] = useState(false);
  const accounts = [
    {
        id: '1',
        name: 'Chris Evans'
    },
    {
        id: '2',
        name: 'Chris Evans'
    },
    {
        id: '3',
        name: 'Chris Evans'
    }
  ];

  const [viewEmailGraph1, setViewEmailGraph1] = useState(true);
  const [viewEmailGraph2, setViewEmailGraph2] = useState(true);
  const [viewEmailGraph3, setViewEmailGraph3] = useState(false);

  const emails = [
    {
        id: '1',
        title: 'Gmail'
    },
    {
        id: '2',
        title: 'Outlook'
    },
    {
        id: '3',
        title: 'SendGrid'
    }
  ];

  const outreach1 = [
    {
        id: '1',
        title: 'Camp title 1'
    },
    {
        id: '2',
        title: 'Camp title 2'
    },
    {
        id: '3',
        title: 'Camp title 3'
    }
  ];

  const salesRep1 = [
    {
        id: '1',
        name: 'Chris Evans'
    },
    {
        id: '2',
        name: 'Chris Evans'
    },
    {
        id: '3',
        name: 'Chris Evans'
    }
  ];

  return (
    <div className='insights-content secondary-bg p-3'>
        <div className='row g-0'>
            <div className='col-md-12'>
                <div className='insights-section'>
                    <div className='section-top d-flex justify-content-between'>
                        <h6>LinkedIn Accounts</h6>
                        <div className='d-flex align-items-center justify-content-end'>
                            <Form.Select>
                                {
                                    accounts.map((item) => {
                                        return <option key={item.id} value={'account-'+item.id}>{item.name}</option>
                                    })
                                }
                            </Form.Select>
                            <Dropdown autoClose='outside'>
                                <Dropdown.Toggle variant='primary' className='filter-dropdown me-2'>
                                    <span>Insight Graph</span>
                                    <FiChevronDown size={16} className='ms-2' />
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='graph-dropdown p-2'>
                                    <Form.Check
                                        type='checkbox'
                                        id={'account-graph-1'}
                                        name={'account-graphs'}
                                        label='LinkedIn Messages Sent'
                                        checked={viewAccGraph1}
                                        onChange={e => e.target.checked ? setViewAccGraph1(true) : setViewAccGraph1(false)}
                                        />
                                    <Form.Check
                                        type='checkbox'
                                        id={'account-graph-2'}
                                        name={'account-graphs'}
                                        label='Connects by Email Sent'
                                        checked={viewAccGraph2}
                                        onChange={e => e.target.checked ? setViewAccGraph2(true) : setViewAccGraph2(false)}
                                        />
                                    <Form.Check
                                        type='checkbox'
                                        id={'account-graph-3'}
                                        name={'account-graphs'}
                                        label='Connection Requests Sent'
                                        checked={viewAccGraph3}
                                        onChange={e => e.target.checked ? setViewAccGraph3(true) : setViewAccGraph3(false)}
                                        />
                                    <Form.Check
                                        type='checkbox'
                                        id={'account-graph-4'}
                                        name={'account-graphs'}
                                        label='InMails Sent'
                                        checked={viewAccGraph4}
                                        onChange={e => e.target.checked ? setViewAccGraph4(true) : setViewAccGraph4(false)}
                                        />
                                    <Form.Check
                                        type='checkbox'
                                        id={'account-graph-5'}
                                        name={'account-graphs'}
                                        label='Viewed Profiles'
                                        checked={viewAccGraph5}
                                        onChange={e => e.target.checked ? setViewAccGraph5(true) : setViewAccGraph5(false)}
                                        />
                                    <Form.Check
                                        type='checkbox'
                                        id={'account-graph-6'}
                                        name={'account-graphs'}
                                        label='Followed Profiles'
                                        checked={viewAccGraph6}
                                        onChange={e => e.target.checked ? setViewAccGraph6(true) : setViewAccGraph6(false)}
                                        />
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className='section-body d-flex flex-wrap mt-3'>
                        { viewAccGraph1 && <InsightGraph title='LinkedIn Messages Sent' /> }
                        { viewAccGraph2 && <InsightGraph title='Connects by Email Sent' /> }
                        { viewAccGraph3 && <InsightGraph title='Connection Requests Sent' /> }
                        { viewAccGraph4 && <InsightGraph title='InMails Sent' /> }
                        { viewAccGraph5 && <InsightGraph title='Viewed Profiles Sent' /> }
                        { viewAccGraph6 && <InsightGraph title='Followed Profiles Sent' /> }
                    </div>
                </div>
                <div className='insights-section mt-3'>
                    <div className='section-top d-flex justify-content-between'>
                        <h6>Email Accounts</h6>
                        <div className='d-flex align-items-center justify-content-end'>
                            <Form.Select>
                                {
                                    emails.map((item) => {
                                        return <option key={item.id} value={'email-'+item.id}>{item.title}</option>
                                    })
                                }
                            </Form.Select>
                            <Dropdown autoClose='outside'>
                                <Dropdown.Toggle variant='primary' className='filter-dropdown me-2'>
                                    <span>Insight Graph</span>
                                    <FiChevronDown size={16} className='ms-2' />
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='graph-dropdown p-2'>
                                    <Form.Check
                                        type='checkbox'
                                        id={'email-graph-1'}
                                        name={'email-graphs'}
                                        label='Emails Sent'
                                        checked={viewEmailGraph1}
                                        onChange={e => e.target.checked ? setViewEmailGraph1(true) : setViewEmailGraph1(false)}
                                        />
                                    <Form.Check
                                        type='checkbox'
                                        id={'email-graph-2'}
                                        name={'email-graphs'}
                                        label='Emails Opened'
                                        checked={viewEmailGraph2}
                                        onChange={e => e.target.checked ? setViewEmailGraph2(true) : setViewEmailGraph2(false)}
                                        />
                                    <Form.Check
                                        type='checkbox'
                                        id={'email-graph-3'}
                                        name={'email-graphs'}
                                        label='Links Clicked'
                                        checked={viewEmailGraph3}
                                        onChange={e => e.target.checked ? setViewEmailGraph3(true) : setViewEmailGraph3(false)}
                                        />
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className='section-body d-flex flex-wrap mt-3'>
                        { viewEmailGraph1 && <InsightGraph title='Emails Sent' /> }
                        { viewEmailGraph2 && <InsightGraph title='Emails Opened' /> }
                        { viewEmailGraph3 && <InsightGraph title='Links Clicked' /> }
                    </div>
                </div>
                <div className='row g-0 mt-3'>
                    <div className='col-md-6 pe-3'>
                        <div className='section-top d-flex justify-content-between'>
                            <h6>Outreach Performance</h6>
                            <div className='d-flex align-items-center justify-content-end'>
                                <Form.Select>
                                    {
                                        outreach1.map((item) => {
                                            return <option key={item.id} value={'outreach1-'+item.id}>{item.title}</option>
                                        })
                                    }
                                </Form.Select>
                                <Form.Select>
                                    {
                                        outreach1.map((item) => {
                                            return <option key={item.id} value={'outreach2-'+item.id}>{item.title}</option>
                                        })
                                    }
                                </Form.Select>
                            </div>
                        </div>
                        <div className='section-body full-width-graph d-flex flex-wrap mt-3'>
                            <InsightGraph title='Outreach Comparison' />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='section-top d-flex justify-content-between'>
                            <h6>Sales Rep Performance</h6>
                            <div className='d-flex align-items-center justify-content-end'>
                                <Form.Select>
                                    {
                                        salesRep1.map((item) => {
                                            return <option key={item.id} value={'sales-rep1-'+item.id}>{item.name}</option>
                                        })
                                    }
                                </Form.Select>
                                <Form.Select>
                                    {
                                        salesRep1.map((item) => {
                                            return <option key={item.id} value={'sales-rep2-'+item.id}>{item.name}</option>
                                        })
                                    }
                                </Form.Select>
                            </div>
                        </div>
                        <div className='section-body full-width-graph d-flex flex-wrap mt-3'>
                            <InsightGraph title='Sales Rep Comparison' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
