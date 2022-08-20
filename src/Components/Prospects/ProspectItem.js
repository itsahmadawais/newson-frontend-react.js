import React from 'react';
import { BsBriefcase, BsBuilding } from "react-icons/bs";

export default function ProspectItem({data}) {
  return (
    <tr>
        <td>
            <img src={data.photo} alt='' />
        </td>
        <td>
            <p className='name'>{data.name}</p>
            <p className='status'>{data.status}</p>
        </td>
        <td>
            <p><BsBriefcase size={13} /> {data.position}</p>
            <p><BsBuilding size={13} /> {data.company}</p>
        </td>
        <td>
            <p>{data.enrichEmail}</p>
        </td>
        <td>
            <p>{data.workPersEmail}</p>
        </td>
    </tr>
  )
}
