import React from 'react'
import ListItem from './ListItem';

export default function ListBox({items}) {
  return (
    <div className='list-box custom-scrollbar primary-bg p-2'>
        <table className='table table-borderless align-middle mb-0'>
            <tbody>
                {
                    items.map((item) => {
                        return <ListItem key={item.id} data={item} />
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
