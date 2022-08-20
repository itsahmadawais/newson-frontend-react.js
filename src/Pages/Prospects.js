import React from 'react';
import ProspectsContent from '../Components/Prospects/ProspectsContent';
import SidebarLayout from '../Layouts/SidebarLayout';

export default function Prospects() {
  return (
    <SidebarLayout title={'Prospects'}>
      <ProspectsContent />
    </SidebarLayout>
  )
}
