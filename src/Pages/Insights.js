import React from 'react';
import InsightsContent from '../Components/Insights/InsightsContent';
import SidebarLayout from '../Layouts/SidebarLayout';

export default function Insights() {
  return (
    <SidebarLayout title={'Insights'}>
      <InsightsContent />
    </SidebarLayout>
  )
}
