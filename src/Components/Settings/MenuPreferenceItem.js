import React from 'react';
import { AiOutlineAppstore, AiOutlineRead } from "react-icons/ai";
import { HiOutlineCog } from "react-icons/hi";
import { VscMegaphone } from "react-icons/vsc";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { BiBarChartAlt2 } from "react-icons/bi";

export default function MenuPreferenceItem({data}) {
  const whichIcon = () => {
    switch (data.title) {
        case '':
            
            break;
    
        default:
            break;
    }
  }
  return (
    <div className='menu-preference-item box-card mb-2'>
        {whichIcon}
    </div>
  )
}
