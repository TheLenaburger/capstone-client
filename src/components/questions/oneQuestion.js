import React, { useState, useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { getOneQuestion } from '../../api/question'
import { Spinner, Button } from 'react-bootstrap'
import { getOneQuestionFailure } from '../AutoDismissAlert/messages'

const OneQuestion = ({ msgAlert, user }) => {
  const [question, setQuestion] = useState(null)
  const [shouldNavigate, setShouldNavigate] = useState(false)
  const [shouldEdit, setShouldEdit] = useState(false)
  const { id } = useParams()

  if (!user) {
    return <Navigate to='/sign-in' />
  }

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        await getOneQuestion(user, id).then(res =>
          setQuestion(res.data.question)
        )
      } catch (error) {
        msgAlert({
          heading: 'Finding question failed with error: ',
          message: getOneQuestionFailure,
          variant: 'danger'
        })
      }
    }
    fetchQuestion()
  }, [])

  if (shouldNavigate) {
    return <Navigate to='/questions' />
  }

  if (shouldEdit) {
    return <Navigate to={`/questions/${id}/edit/`} />
  }

  if (question === null) {
    return (
      <>
        <h4>Fetching Question</h4>
        <Spinner animation='border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
        <Button
          onClick={() => setShouldNavigate(true)}
          variant='primary'
          type='button'
        >
          Return Home
        </Button>
      </>
    )
  } else if (question.owner === user.id) {
    return (
      <>
        <h2>{question.title}</h2>
        <br />
        <p>{question.body}</p>
        <br />
        <Button
          onClick={() => {
            setShouldEdit(true)
          }}
          variant='success'
          type='button'
        >
          Edit This Question
        </Button>
        <br />
        <Button
          onClick={() => {
            setShouldNavigate(true)
          }}
          variant='primary'
          type='button'
        >
          Back to Questions
        </Button>
      </>
    )
  } else {
    return (
      <>
        <h2>{question.title}</h2>
        <br />
        <p>{question.body}</p>
        <Button
          onClick={() => {
            setShouldNavigate(true)
          }}
          variant='primary'
          type='button'
        >
          Back to Questions
        </Button>
      </>
    )
  }
}

export default OneQuestion
