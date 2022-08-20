import React from 'react'

export default function SingleMember({data}) {
  return (
    <div className='single-member text-center'>
        <img src={data.image} alt='' />
        <p className='fw-600 mb-1'>{data.name}</p>
    </div>
  )
}
