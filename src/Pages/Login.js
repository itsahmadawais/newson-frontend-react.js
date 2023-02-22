import React from 'react'
import LoginContent from '../Components/Login/LoginContent'
import PublicLayout from '../Layouts/PublicLayout'

export default function Login() {
  return (
    <PublicLayout page='login'>
        <LoginContent />
    </PublicLayout>
  )
}
