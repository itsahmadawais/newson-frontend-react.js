import React from 'react'
import NotificationsBox from '../Notifications/NotificationsBox'
import TeamMembersBox from '../TeamMembers/TeamMembersBox'

export default function RightSidebar() {
  return (
    <section className='right-sidebar ps-3 ms-3'>
        <TeamMembersBox />
        <NotificationsBox />
    </section>
  )
}
