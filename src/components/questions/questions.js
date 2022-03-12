import React from 'react'
import { Navigate } from 'react-router-dom'

const Questions = ({ user, msgAlert }) => {
  if (!user) {
    return <Navigate to='/sign-in' />
  }

  return (
    <div>
      <h3>Here is where questions will go</h3>
    </div>
  )
}

export default Questions
