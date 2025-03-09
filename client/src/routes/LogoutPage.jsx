import React from 'react'
import NavHeader from '../components/NavHeader'

const LogoutPage = () => {
  localStorage.removeItem('authToken'); 
  return (
    <div>
        <NavHeader />
        <p>
            Succesfully logged out. Come back soon!
        </p>
    </div>
  )
}

export default LogoutPage;