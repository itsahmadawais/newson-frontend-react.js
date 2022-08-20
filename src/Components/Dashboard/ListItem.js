import React from 'react'

export default function ListItem({data}) {
  return (
    <tr className='list-item box-card'>
        <td><img src={data.image} alt='' /></td>
        <td><p className='fw-600 mb-0'>{data.name}</p></td>
        <td><p className='mb-0'>{data.date}</p></td>
        <td><p className='mb-0'>{data.time}</p></td>
    </tr>
  )
}
