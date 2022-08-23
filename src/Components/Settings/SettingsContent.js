import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import AccountBox from './AccountBox';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import MultiRangeSlider from "multi-range-slider-react";
import WorkspaceMemberItem from './WorkspaceMemberItem';

export default function SettingsContent() {
  const [ inmailValue, setInmailValue ] = useState(0);

  const [minValueLimit1, setMinValueLimit1] = useState(10);
  const [maxValueLimit1, setMaxValueLimit1] = useState(15);
  const handleInputLimit1 = (e) => {
    setMinValueLimit1(e.minValue);
    setMaxValueLimit1(e.maxValue);
  };

  const [minValueLimit2, setMinValueLimit2] = useState(40);
  const [maxValueLimit2, setMaxValueLimit2] = useState(50);
  const handleInputLimit2 = (e) => {
    setMinValueLimit2(e.minValue);
    setMaxValueLimit2(e.maxValue);
  };

  const [minValueLimit3, setMinValueLimit3] = useState(10);
  const [maxValueLimit3, setMaxValueLimit3] = useState(15);
  const handleInputLimit3 = (e) => {
    setMinValueLimit3(e.minValue);
    setMaxValueLimit3(e.maxValue);
  };

  const [minValueLimit4, setMinValueLimit4] = useState(25);
  const [maxValueLimit4, setMaxValueLimit4] = useState(35);
  const handleInputLimit4 = (e) => {
    setMinValueLimit4(e.minValue);
    setMaxValueLimit4(e.maxValue);
  };

  const [minValueLimit5, setMinValueLimit5] = useState(5);
  const [maxValueLimit5, setMaxValueLimit5] = useState(10);
  const handleInputLimit5 = (e) => {
    setMinValueLimit5(e.minValue);
    setMaxValueLimit5(e.maxValue);
  };

  const [minValueLimit6, setMinValueLimit6] = useState(25);
  const [maxValueLimit6, setMaxValueLimit6] = useState(30);
  const handleInputLimit6 = (e) => {
    setMinValueLimit6(e.minValue);
    setMaxValueLimit6(e.maxValue);
  };

  const [minValueLimit7, setMinValueLimit7] = useState(90);
  const [maxValueLimit7, setMaxValueLimit7] = useState(100);
  const handleInputLimit7 = (e) => {
    setMinValueLimit7(e.minValue);
    setMaxValueLimit7(e.maxValue);
  };

  const accounts = [
    {
        id: '1',
        image: '/images/testimonee.jpg',
        status: 'connected',
        email: 'milli.bob@gmail.com',
    },
    {
        id: '2',
        image: '/images/testimonee.jpg',
        status: 'paused',
        email: 'milli.bob@gmail.com',
    },
    {
        id: '3',
        image: '/images/testimonee.jpg',
        status: 'disconnected',
        email: 'milli.bob@gmail.com',
    },
    {
        id: '4',
        image: '/images/testimonee.jpg',
        status: 'paused',
        email: 'milli.bob@gmail.com',
    },
    {
        id: '5',
        image: '/images/testimonee.jpg',
        status: 'paused',
        email: 'milli.bob@gmail.com',
    }
  ];

  const workspaceMembers = [
    {
        id: '1',
        email: 'milli.bob@gmail.com',
        accounts: [
            {
                id: '1',
                image: '/images/testimonee.jpg',
                email: 'chris.evan1@gmail.com'
            },
            {
                id: '2',
                image: '/images/testimonee.jpg',
                email: 'chris.evan2@gmail.com'
            }
        ],
        adminRight: true
    },
    {
        id: '2',
        email: 'milli.bob@gmail.com',
        accounts: [
            {
                id: '1',
                image: '/images/testimonee.jpg',
                email: 'chris.evan3@gmail.com'
            },
            {
                id: '2',
                image: '/images/testimonee.jpg',
                email: 'chris.evan4@gmail.com'
            }
        ],
        adminRight: false
    },
    {
        id: '3',
        email: 'milli.bob@gmail.com',
        accounts: [],
        adminRight: false
    }
  ];

  const workspaceName = 'Alpha Team';
  const inviteCode = 'fh39988jdsss0'
  
  return (
    <div className='settings-content secondary-bg p-3'>
        <div className='row g-0'>
            <div className='col-md-12'>
                <div className='section pb-4'>
                    <h5 className='mb-3'>LinkedIn Accounts</h5>
                    <div className='d-flex flex-wrap'>
                        {
                            accounts.map((item) => {
                                return <AccountBox key={item.id} data={item} />
                            })
                        }
                    </div>
                    <h5 className='mb-3'>Email Accounts</h5>
                    <div className='d-flex flex-wrap'>
                        {
                            accounts.map((item) => {
                                return <AccountBox key={item.id} data={item} />
                            })
                        }
                    </div>
                </div>
                <div className='section py-4'>
                    <div className='d-flex justify-content-between'>
                        <h5 className='mb-3'>Outreach Limits</h5>
                        <Form.Switch
                            id='default-limits'
                            label='Set as Default'
                            />
                    </div>
                    <div className='d-flex align-items-center'>
                        <Form.Switch 
                            id="weekend-run-switch"
                            label="Run on weekend"
                            checked
                        />
                    </div>
                    <div className='d-flex align-items-center mt-3'>
                        <Form.Switch 
                            id="connect-req-boost-switch"
                            label="Use connection requests booster"
                        />
                    </div>
                    <div className='row g-0'>
                        <div className='col-md-6 pe-4'>
                            <div className='d-flex justify-content-between mt-3'>
                                <p>Views of profiles per day</p>
                                <p>{minValueLimit1} - {maxValueLimit1}</p>
                            </div>
                            <MultiRangeSlider
                                min={0}
                                max={100}
                                step={1}
                                ruler={false}
                                label={false}
                                preventWheel={false}
                                minValue={minValueLimit1}
                                maxValue={maxValueLimit1}
                                onInput={(e) => {
                                    handleInputLimit1(e);
                                }}
                            />
                            <div className='d-flex justify-content-between mt-3'>
                                <p>Connections by email per day</p>
                                <p>{minValueLimit2} - {maxValueLimit2}</p>
                            </div>
                            <MultiRangeSlider
                                min={0}
                                max={100}
                                step={1}
                                ruler={false}
                                label={false}
                                preventWheel={false}
                                minValue={minValueLimit2}
                                maxValue={maxValueLimit2}
                                onInput={(e) => {
                                    handleInputLimit2(e);
                                }}
                            />
                            <div className='d-flex justify-content-between mt-3'>
                                <p>Connection requests per day</p>
                                <p>{minValueLimit3} - {maxValueLimit3}</p>
                            </div>
                            <MultiRangeSlider
                                min={0}
                                max={80}
                                step={1}
                                ruler={false}
                                label={false}
                                preventWheel={false}
                                minValue={minValueLimit3}
                                maxValue={maxValueLimit3}
                                onInput={(e) => {
                                    handleInputLimit3(e);
                                }}
                            />
                            <div className='d-flex justify-content-between mt-3'>
                                <p>Messages per day</p>
                                <p>{minValueLimit4} - {maxValueLimit4}</p>
                            </div>
                            <MultiRangeSlider
                                min={0}
                                max={80}
                                step={1}
                                ruler={false}
                                label={false}
                                preventWheel={false}
                                minValue={minValueLimit4}
                                maxValue={maxValueLimit4}
                                onInput={(e) => {
                                    handleInputLimit4(e);
                                }}
                            />
                        </div>
                        <div className='col-md-6 ps-4'>
                            <div className='d-flex justify-content-between mt-3'>
                                <p>InMails per day</p>
                                <p>{minValueLimit5} - {maxValueLimit5}</p>
                            </div>
                            <MultiRangeSlider
                                min={0}
                                max={80}
                                step={1}
                                ruler={false}
                                label={false}
                                preventWheel={false}
                                minValue={minValueLimit5}
                                maxValue={maxValueLimit5}
                                onInput={(e) => {
                                    handleInputLimit5(e);
                                }}
                            />
                            <div className='d-flex justify-content-between mt-3'>
                                <p>Searches per day</p>
                                <p>{minValueLimit6} - {maxValueLimit6}</p>
                            </div>
                            <MultiRangeSlider
                                min={0}
                                max={60}
                                step={1}
                                ruler={false}
                                label={false}
                                preventWheel={false}
                                minValue={minValueLimit6}
                                maxValue={maxValueLimit6}
                                onInput={(e) => {
                                    handleInputLimit6(e);
                                }}
                            />
                            <div className='d-flex justify-content-between mt-3'>
                                <p>Emails per day</p>
                                <p>{minValueLimit7} - {maxValueLimit7}</p>
                            </div>
                            <MultiRangeSlider
                                min={0}
                                max={250}
                                step={1}
                                ruler={false}
                                label={false}
                                preventWheel={false}
                                minValue={minValueLimit7}
                                maxValue={maxValueLimit7}
                                onInput={(e) => {
                                    handleInputLimit7(e);
                                }}
                            />
                            <p className='inmail-title mt-5'>For LinkedIn Premium Accounts Only</p>
                            <div className='d-flex justify-content-between'>
                                <p>InMail credits per month</p>
                                <p>{inmailValue}</p>
                            </div>
                            <RangeSlider
                                tooltip='off'
                                variant='primary'
                                value={inmailValue}
                                onChange={ e => setInmailValue(e.target.value)}
                                />
                            <p className='credits-info mb-0'>Inmail credits left: <span>0</span></p>
                            <p className='credits-info mb-0'>Inmail credits used this month <span>0</span></p>
                        </div>
                    </div>
                </div>
                <div className='section input-style py-4'>
                    <h5 className='mb-3'>Preferences</h5>
                    <div className='row g-0'>
                        <div className='col-md-6 pe-4'>
                            <Form.Label>Workspace Name</Form.Label>
                            <Form.Control
                                type='text'
                                value={workspaceName}
                                />
                        </div>
                        <div className='col-md-6 ps-4'>
                            <Form.Label>Invite Code</Form.Label>
                            <Form.Control
                                type='text'
                                value={inviteCode}
                                readOnly
                                />
                            <Button variant='primary' className='mt-3'>Reset Code</Button>
                        </div>
                    </div>
                    <table className='table table-borderless workspace-table align-middle text-center mt-4'>
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>Allowed LinkedIn Accounts</th>
                                <th>Has Admin Rights</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                workspaceMembers.map((item) => {
                                    return <WorkspaceMemberItem key={item.id} data={item} />
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className='section input-style py-4'>
                    <h5 className='mb-3'>Security</h5>
                    <div className='row g-0'>
                        <div className='col-md-6 pe-4'>
                            <Form.Label>Change Login Password</Form.Label>
                            <Form.Control
                            type='password'
                            placeholder='Enter Password'
                            />
                            <Button variant='primary' className='mt-3'>Set Password</Button>
                        </div>
                        <div className='col-md-6 ps-4'>
                            <Form.Label>Change Security Password</Form.Label>
                            <Form.Control
                            type='password'
                            placeholder='Enter Password'
                            />
                            <Button variant='primary' className='mt-3'>Set Password</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
