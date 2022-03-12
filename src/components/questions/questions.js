import React, { useState, useEffect } from 'react'
import { Spinner, Button } from 'react-bootstrap'
import { Navigate, Link } from 'react-router-dom'
import { showAllQuestions } from '../../api/question'
import { showAllQuestionsFailure } from '../AutoDismissAlert/messages'

const Questions = ({ msgAlert, user }) => {
  const [questions, setQuestions] = useState([])
  const [askQuestion, setAskQuestion] = useState(false)

  if (!user) {
    return <Navigate to='/sign-in' />
  }

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        await showAllQuestions(user)
          .then(res => setQuestions(res.data.questions))
      } catch (error) {
        msgAlert({
          heading: 'Getting Questions Failed: ',
          message: showAllQuestionsFailure,
          variant: 'danger'
        })
      }
    }
    fetchQuestions()
  }, [])

  const renderedQuestions = questions.map(question => {
    return (
      <li className='questions' key={question.id}>
        <Link to={`/questions/${question.id}`}>
          <h6>{question.title}</h6>
        </Link>
      </li>
    )
  })

  if (askQuestion) {
    return <Navigate to='/questions/create' />
  }

  if (questions.length === 0) {
    return (
      <>
        <h4>Finding Some Questions</h4>
        <Spinner animation='border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
        <Button onClick={() => setAskQuestion(true)} variant='primary' type='button'>Ask a Question</Button>
      </>
    )
  }

  return (
    <div className='display-area'>
      <h3>Questions Ahoy!</h3>
      <p>One of these days, we may even have answers...</p>
      <Button onClick={() => { setAskQuestion(true) }} variant='primary' type='button'>Ask a Question</Button>
      <ul>{renderedQuestions}</ul>
    </div>
  )
}

export default Questions
