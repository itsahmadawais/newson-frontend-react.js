import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { AiOutlineSearch } from "react-icons/ai";

export default function Searchbar() {
  return (
    <InputGroup className='search-bar'>
        <Form.Control
            type='text'
            placeholder="Search..."
        />
        <Button variant="search">
            <AiOutlineSearch size={18} />
        </Button>
    </InputGroup>
  )
}
