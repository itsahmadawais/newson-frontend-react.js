import React, { useState } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { HiOutlineCog } from "react-icons/hi";
import { AiOutlineDelete } from "react-icons/ai";

export default function WorkspaceMemberItem({data}) {
  const [adminRight, setAdminRight] = useState(data.adminRight);

  return (
    <tr className='workspace-member-item'>
        <td>
            <p className='mb-0'>{data.email}</p>
        </td>
        <td className='d-flex flex-wrap justify-content-center'>
            {data.accounts.map((item) => {
                return <div key={item.id} className='me-2 mb-2'>
                           <OverlayTrigger
                                key={'overlay-'+item.id}
                                placement='bottom'
                                overlay={<Tooltip id={'tooltip-'+item.id}>{item.email}</Tooltip>}
                            >
                                <img src={item.image} alt='' />
                            </OverlayTrigger>
                       </div>
            })}
        </td>
        <td>
            <Form.Switch
                id={'admin-right-switch-'+data.id}
                checked={adminRight ? true : false}
                onChange={e => setAdminRight(!adminRight)}
                />
        </td>
        <td>
            <Button variant='action' className='me-2'><HiOutlineCog size={20}/></Button>
            <Button variant='action'><AiOutlineDelete size={20}/></Button>
        </td>
    </tr>
  )
}
