import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { AiOutlinePlus, AiOutlineLink, AiOutlineDelete, AiOutlineFile } from "react-icons/ai";
import { BiFilter } from "react-icons/bi";
import { MdOutlinePlayArrow } from "react-icons/md";
import RangeSlider from 'react-bootstrap-range-slider';
import { useNavigate } from 'react-router-dom';
import OutreachSteps from './OutreachSteps';
import { toast, ToastContainer } from 'react-toastify';
import Loader from '../UI/Loader';

export default function CreateOutreachContent() {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [campSteps, setCampSteps] = useState([]);
  const [campType, setCampType] = useState('1');
  const [campName, setCampName] = useState('');
  const [premiumAccountOnly, setPremiumAccountOnly] = useState(false);
  const [linkTracking, setLinkTracking] = useState(true);
  const [emailOnly, setEmailOnly] = useState(false);
  const [moveProspects, setMoveProspects] = useState(false);
  const [includeProspects, setIncludeProspects] = useState(false);
  
  const [activeSearch, setActiveSearch] = useState(1);
  const [searchCount, setSearchCount] = useState(1000);
  const [searchItems, setSearchItems] = useState([]);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState({
    conn1: false,
    conn2: false,
    conn3: false,
    location: '',
    currComp: ''
  });
  const [csvFile, setCsvFile] = useState(null);
  
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    }
    else {
        event.preventDefault();
        event.stopPropagation();
        setValidated(false);
        setShow(false);

        //Add the search item
        if (activeSearch < 6) {
            const newItems = searchItems.concat({query, filter: searchCount});
            setSearchItems(newItems);            
        }
        else if (activeSearch === 7) {
            let reader = new FileReader();
            let data = '';
            reader.onload = () => {
                data = csvToArray(reader.result);
            };
            reader.readAsText(csvFile);

            const newItems = searchItems.concat({csvData: data});
            setSearchItems(newItems);
        }
        else {
            //Make a string to display for selected filter values
            let filterText = '';
            if(filter.conn1){filterText = filterText + '1st,'};
            if(filter.conn2){filterText = filterText + '2nd,'};
            if(filter.conn3){filterText = filterText + '3rd,'};
            filterText += filter.location;
            filterText += filter.currComp;
            const newItems = searchItems.concat({query, filter: filterText});
            setSearchItems(newItems);
        }

        setQuery('');
        setSearchCount(1000);
        setFilter({
            conn1: false,
            conn2: false,
            conn3: false,
            location: '',
            currComp: ''
          });
    }
  };

  const handleShow = () => setShow(!show);
  
  const handleCancel = () => navigate(-1);

  const handleCampPublish = () => {
    if (campName === '') {
        toast.error('Please add Outreach Name!');
    }
    else if (campSteps.length === 0) {
        toast.error('Please add steps!');
    }
    else {
        const campData = {
            name: campName,
            type: campType,
            premiumOnly: premiumAccountOnly,
            linkTracking: linkTracking,
            emailOnly: emailOnly,
            moveProspects: moveProspects,
            includeProspects: includeProspects,
            searches: searchItems,
            steps: campSteps
        };
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            navigate('/campaigns');
        }, 1500);
    }
  };

  const handleURLPlaceholder = () => {
    switch (activeSearch) {
        case 1:
            return 'Enter LinkedIn or Sales Navigator search link';
        case 2:
            return 'Enter LinkedIn link to post';
        case 3:
            return 'Enter LinkedIn event link';
        case 4:
            return 'Enter LinkedIn Sales Navigator List link';
        case 5:
            return 'Enter LinkedIn Recruiter Project link';
        default:
            break;
    }
  };

  const handleCountLimit = (e) => {
    if (e.target.value > 2500) {
        e.target.value = 2500;
    }
    if (activeSearch === 3) {
        if (e.target.value > 1000) {
            e.target.value = 1000;
        }
    }
    if (e.target.value < 1) {
        e.target.value = 1;
    }
  };

  const handleEventSearch = () => {
    setActiveSearch(3);
    if (searchCount > 1000) {
        setSearchCount(1000);
    }
  };

  function removeSearchItem(index) {
    let data = [...searchItems];
    data.splice(index, 1);
    setSearchItems(data);
  };

  const csvFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
        setCsvFile(e.target.files[0]);
    }
  };

  function csvToArray(str, delimiter = ",") {
    const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");

    const arr = rows.map(function (row) {
      const values = row.split(delimiter);
      const el = headers.reduce(function (object, header, index) {
        object[header] = values[index];
        return object;
      }, {});
      return el;
    });
  
    // return the array
    return arr;
  };

  return (
    <div className='create-outreach-content secondary-bg p-4 custom-scrollbar'>
        {
            isLoading ?
            <Loader /> :
            <>
                <div className='row g-0'>
                    <div className='col-md-6'>
                        <div className='box-card p-3 me-2'>
                            <div className='mb-3'>
                                <Form.Label>Outreach Name</Form.Label>
                                <Form.Control
                                    type='text'
                                    name='outreach-name'
                                    placeholder='Enter Outreach Name'
                                    value={campName}
                                    onChange={(e) => setCampName(e.target.value)}
                                    />
                            </div>
                            <div className='mb-3'>
                                <Form.Label>Outreach Type</Form.Label>
                                <Form.Control 
                                    as='select'
                                    value={campType}
                                    onChange={(e) => setCampType(e.target.value)}
                                    >
                                    <option value={'1'}>Outreach Campaign</option>
                                    <option value={'2'}>Engagement Campaign</option>
                                </Form.Control>
                            </div>
                            <div className='mb-3'>
                                <Form.Switch 
                                    id="camp-switch1"
                                    label="LinkedIn Premium accounts only"
                                    checked={premiumAccountOnly}
                                    onChange={(e) => setPremiumAccountOnly(e.target.checked)}
                                    />
                            </div>
                            <div className='mb-3'>
                                <Form.Switch 
                                    id="camp-switch2"
                                    label="Enable link tracking"
                                    checked={linkTracking}
                                    onChange={(e) => setLinkTracking(e.target.value)}
                                    />
                            </div>
                            <div className='mb-3'>
                                <Form.Switch 
                                    id="camp-switch3"
                                    label="Email only outreach"
                                    checked={emailOnly}
                                    onChange={(e) => setEmailOnly(e.target.checked)}
                                    />
                            </div>
                            <div className='mb-3'>
                                <Form.Switch 
                                    id="camp-switch4"
                                    label="Move prospects from other outreaches if they are found"
                                    checked={moveProspects}
                                    onChange={(e) => setMoveProspects(e.target.checked)}
                                    />
                            </div>
                            <div className='mb-3'>
                                <Form.Switch 
                                    id="camp-switch5"
                                    label="Include prospects I've contacted on LinkedIn before"
                                    checked={includeProspects}
                                    onChange={(e) => setIncludeProspects(e.target.checked)}
                                    />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='searches box-card p-3 ms-2 custom-scrollbar'>
                            <p>Searches</p>
                            {
                                searchItems.length === 0 ?
                                '' :
                                searchItems.map((item, index) => {
                                    return <div key={index} className='search-item d-flex justify-content-between p-2 mb-3'>
                                        {
                                            item.hasOwnProperty('csvData') ?
                                            <div className='d-flex align-items-center'>
                                                <span><AiOutlineFile size={18} /></span>
                                                <p className='query'>{csvFile.name}</p>
                                            </div> :
                                            <div className='d-flex align-items-center'>
                                                <span><AiOutlineLink size={18} /></span>
                                                <p className='query'>{item.query}</p>
                                                <span><BiFilter size={18} /></span>
                                                <p className='filter'>{item.filter}</p>
                                            </div>
                                        }
                                        <Button variant='red' onClick={() => removeSearchItem(index)}>
                                            <AiOutlineDelete size={20} />
                                        </Button>
                                    </div>
                                })
                            }
                            <Button variant='primary' onClick={handleShow}>
                                Add Search <AiOutlinePlus size={20} />
                            </Button>
                        </div>
                    </div>
                </div>

                { /***** Add Search Popup *****/ }
                
                <Modal 
                    show={show} 
                    onHide={handleShow}
                    size='lg'
                    centered
                    className='max-heighted-modal add-search-modal'
                    >
                    <Modal.Header closeButton>
                        <Modal.Title>Add Search</Modal.Title>
                    </Modal.Header>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Modal.Body>
                            <div className='mb-4'>
                                <p className='mb-1'>Add From:</p>
                                <Button
                                    variant='tab'
                                    onClick={() => setActiveSearch(1)}
                                    className={activeSearch === 1 ? 'active' : ''}
                                    >
                                    Search URL
                                </Button>
                                <Button 
                                    variant='tab' 
                                    onClick={() => setActiveSearch(2)}
                                    className={activeSearch === 2 ? 'active' : ''}
                                    >
                                    Post URL
                                </Button>
                                <Button 
                                    variant='tab'
                                    onClick={handleEventSearch}
                                    className={activeSearch === 3 ? 'active' : ''}
                                    >
                                    Event
                                </Button>
                                <Button 
                                    variant='tab'
                                    onClick={() => setActiveSearch(4)}
                                    className={activeSearch === 4 ? 'active' : ''}
                                    >
                                    Navigator List URL
                                </Button>
                                <Button 
                                    variant='tab'
                                    onClick={() => setActiveSearch(5)}
                                    className={activeSearch === 5 ? 'active' : ''}
                                    >
                                    Recruiter Project URL
                                </Button>
                                <Button 
                                    variant='tab' 
                                    onClick={() => setActiveSearch(6)}
                                    className={activeSearch === 6 ? 'active' : ''}
                                    >
                                    LinkedIn Search
                                </Button>
                                <Button 
                                    variant='tab' 
                                    onClick={() => setActiveSearch(7)}
                                    className={activeSearch === 7 ? 'active' : ''}
                                    >
                                    CSV File
                                </Button>
                            </div>
                            {
                                (activeSearch > 0 && activeSearch < 6) &&
                                <div>
                                    <div className='mb-3'>
                                        <Form.Control
                                            type='text'
                                            id='search-url'
                                            placeholder={handleURLPlaceholder()}
                                            onChange={e => setQuery(e.target.value)}
                                            required
                                            />
                                    </div>
                                    <div className='row g-0'>
                                        <p className='mb-0'>No. of Searches:</p>
                                        <div className='col-10'>
                                            <RangeSlider
                                                tooltip='off'
                                                variant='primary'
                                                min={1}
                                                max={activeSearch === 3 ? 1000 : 2500}
                                                value={searchCount}
                                                onChange={e => setSearchCount(e.target.value)}
                                                />
                                        </div>
                                        <div className='col-2 ps-3'>
                                            <Form.Control
                                                type='number'
                                                id='search-count'
                                                min={1}
                                                max={activeSearch === 3 ? 1000 : 2500}
                                                value={searchCount}
                                                onChange={e => setSearchCount(e.target.value)}
                                                onInput={handleCountLimit}
                                                />
                                        </div>
                                    </div>
                                </div>
                            }
                            {
                                (activeSearch === 6) &&
                                <div>
                                    <div className='mb-3'>
                                        <Form.Control
                                            type='text'
                                            id='search-query'
                                            placeholder='Enter search query'
                                            onChange={e => setQuery(e.target.value)}
                                            required
                                            />
                                    </div>
                                    <div className='mb-3'>
                                        <Form.Label>Connections:</Form.Label>
                                        <div className='d-flex flex-wrap'>
                                            <Form.Check
                                                type='checkbox'
                                                name='1st-conn'
                                                label='1st'
                                                onChange={
                                                    (e)  => e.target.checked ? 
                                                    setFilter({...filter, conn1: true}) : 
                                                    setFilter({...filter, conn1: false})
                                                }
                                                />
                                            <Form.Check
                                                type='checkbox'
                                                name='2nd-conn'
                                                label='2nd'
                                                onChange={
                                                    (e)  => e.target.checked ? 
                                                    setFilter({...filter, conn2: true}) : 
                                                    setFilter({...filter, conn2: false})
                                                }
                                                />
                                            <Form.Check
                                                type='checkbox'
                                                name='3rd-conn'
                                                label='3rd'
                                                onChange={
                                                    (e)  => e.target.checked ? 
                                                    setFilter({...filter, conn3: true}) : 
                                                    setFilter({...filter, conn3: false})
                                                }
                                                />
                                        </div>
                                    </div>
                                    <div className='mb-3'>
                                        <Form.Label>Location:</Form.Label>
                                        <Form.Control
                                            type='text'
                                            id='location'
                                            placeholder='Enter location'
                                            onChange={
                                                (e) => setFilter({...filter, location:e.target.value})
                                            }
                                            />
                                    </div>
                                    <div className='mb-3'>
                                        <Form.Label>Current Company:</Form.Label>
                                        <Form.Control
                                            type='text'
                                            id='current-company'
                                            placeholder='Enter current company'
                                            onChange={
                                                (e) => setFilter({...filter, currComp:e.target.value})
                                            }
                                            />
                                    </div>
                                </div>
                            }
                            {
                                activeSearch === 7 &&
                                <div className='mb-3'>
                                    <Form.Label>Select a CSV File</Form.Label>
                                    <Form.Control
                                        type='file'
                                        name='csv-file'
                                        accept='.csv'
                                        onChange={csvFileChange}
                                        required
                                        />
                                    <Form.Control.Feedback type="invalid">
                                        Invalid File.
                                    </Form.Control.Feedback>
                                </div>
                            }
                        </Modal.Body>
                        <Modal.Footer>
                            <Button type='submit' variant="primary">
                                Add Search
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>

                {/***** Outreach Steps *****/}

                <OutreachSteps campSteps={campSteps} setCampSteps={setCampSteps} campType={campType} />

                <div className='d-flex justify-content-between mt-5'>
                    <Button variant='secondary'>Save as Draft</Button>
                    <div>
                        <Button variant='secondary' className='me-2' onClick={handleCancel}>Cancel</Button>
                        <Button variant='primary' type='submit' onClick={handleCampPublish}>Start Outreach <MdOutlinePlayArrow size={20} /></Button>
                    </div>
                </div>
            </>
        }
        <ToastContainer theme='colored' />
    </div>
  )
}
