import React from 'react'
import NavHeader from '../components/NavHeader'

const SignupFailurePage = () => {
  return (
    <div>
        <NavHeader />
        <p>
            Signup failed. User/email taken or blank field entered. 
        </p>
    </div>
  )
}

export default SignupFailurePage;