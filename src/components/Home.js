import React from 'react'
import { Navigate } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'

const Home = ({ user }) => {
  // This component will route a user either to the main page: questions, or to the sign in page, depending on whether they are signed in. Also functionally 'starts' a new user at the sign in page

  if (user) {
    return <Navigate to='/questions' />
  }

  if (!user) {
    return <Navigate to='/sign-in' />
  }

  return (
    <div>
      <h4>Fetching Profile</h4>
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    </div>
  )
}

export default Home
