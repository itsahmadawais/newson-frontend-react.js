import React from 'react';
import { Button } from 'react-bootstrap';

export default function TagButtons({tagAction}) {
  return (
    <div className='d-flex flex-wrap mt-2'>
        <Button 
            variant='secondary' 
            className='tag-btn mb-1'
            onClick={tagAction('{first_name}')}
            >
            First Name
        </Button>
        <Button 
            variant='secondary' 
            className='tag-btn mb-1'
            onClick={tagAction('{last_name}')}
            >
            Last Name
        </Button>
        <Button 
            variant='secondary' 
            className='tag-btn mb-1'
            onClick={tagAction('{location}')}
            >
            Location
        </Button>
        <Button 
            variant='secondary' 
            className='tag-btn mb-1'
            onClick={tagAction('{company_name}')}
            >
            Company Name
        </Button>
        <Button 
            variant='secondary' 
            className='tag-btn mb-1'
            onClick={tagAction('{years_in_company}')}
            >
            Years in Company
        </Button>
        <Button 
            variant='secondary' 
            className='tag-btn mb-1'
            onClick={tagAction('{total_career_positions_count}')}
            >
            Total Career Positions Count
        </Button>
        <Button 
            variant='secondary' 
            className='tag-btn mb-1'
            onClick={tagAction('{total_years_in_career}')}
            >
            Total Years in Career
        </Button>
        <Button 
            variant='secondary' 
            className='tag-btn mb-1'
            onClick={tagAction('{college_name}')}
            >
            College Name
        </Button>
        <Button 
            variant='secondary' 
            className='tag-btn mb-1'
            onClick={tagAction('{Occupation}')}
            >
            Occupation
        </Button>
        <Button 
            variant='secondary' 
            className='tag-btn mb-1'
            onClick={tagAction('{custom_field_1}')}
            >
            Custom Field 1 
        </Button>
        <Button 
            variant='secondary' 
            className='tag-btn mb-1'
            onClick={tagAction('{custom_field_2}')}
            >
            Custom Field 2
        </Button>
        <Button 
            variant='secondary' 
            className='tag-btn mb-1'
            onClick={tagAction('{custom_field_3}')}
            >
            Custom Field 3
        </Button>
    </div>
  )
}
