import React from 'react';
import SettingsContent from '../Components/Settings/SettingsContent';
import FullWidthLayout from '../Layouts/FullWidthLayout';

export default function Settings() {
  return (
    <FullWidthLayout title={'Settings'}>
      <SettingsContent />
    </FullWidthLayout>
  )
}
