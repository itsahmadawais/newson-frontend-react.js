import React from 'react'
import DashboardContent from '../Components/Dashboard/DashboardContent';
import SidebarLayout from '../Layouts/SidebarLayout';

export default function Dashboard() {
  return (
    <SidebarLayout title={'Hey, Chris!'}>
      <DashboardContent />
    </SidebarLayout>
  )
}
