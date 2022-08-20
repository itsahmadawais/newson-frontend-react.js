import React from 'react';
import { VscMegaphone } from "react-icons/vsc";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

export default function CountIconBox({data}) {
  return (
    <div className='count-icon-box box-card d-flex p-3 mb-3'>
        {data.icon === 'message' ?
         <IoChatboxEllipsesOutline className='me-3' /> :
         <VscMegaphone className='me-3' />}
        <div>
            <h4 className='mb-0'>{data.totalValue}</h4>
            <p className='mb-0'>{data.title}</p>
        </div>
    </div>
  )
}
