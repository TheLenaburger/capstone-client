import React, { useState, useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import {
  getOneQuestion,
  updateQuestion,
  deleteQuestion
} from '../../api/question'
import { Spinner, Form, Button } from 'react-bootstrap'
import {
  getOneQuestionFailure,
  updateQuestionFailure,
  updateQuestionSuccess,
  deleteQuestionFailure,
  deleteQuestionSuccess
} from '../AutoDismissAlert/messages'

const EditQuestion = ({ msgAlert, user }) => {
  const [question, setQuestion] = useState(null)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [updated, setUpdated] = useState(false)
  const [shouldNavigate, setShouldNavigate] = useState(false)
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

  const onDeleteQuestion = async () => {
    try {
      await deleteQuestion(user, id).then(
        setShouldNavigate(true),
        msgAlert({
          heading: 'Question Deleted Successfully',
          message: deleteQuestionSuccess,
          variant: 'success'
        })
      )
    } catch (error) {
      msgAlert({
        heading: 'Question Deletion failed with error: ',
        message: deleteQuestionFailure,
        variant: 'danger'
      })
    }
  }

  const onEditQuestion = async event => {
    event.preventDefault()

    try {
      await updateQuestion(title, body, user, id)
      msgAlert({
        heading: 'Question Updated Successfully',
        message: updateQuestionSuccess,
        variant: 'success'
      })
      setUpdated(true)
    } catch (error) {
      msgAlert({
        heading: 'Question Update Failed',
        message: updateQuestionFailure,
        variant: 'danger'
      })
      setTitle('')
      setBody('')
    }
  }

  if (shouldNavigate) {
    return <Navigate to='/questions' />
  }

  if (updated) {
    return <Navigate to={`/questions/${id}`} />
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
  } else if (question.owner !== user.id) {
    return (
      <>
        <h2>{question.title}</h2>
        <br />
        <p>{question.body}</p>
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
        <Button
          onClick={() => setShouldNavigate(true)}
          variant='primary'
          type='button'
        >
          Return Home
        </Button>
        <Button
          className='ownershipReq'
          onClick={onDeleteQuestion}
          variant='danger'
          type='button'
        >
          Delete Question
        </Button>
        <br />
        <div className='row'>
          <Form className='form-bg-style' onSubmit={onEditQuestion}>
            <Form.Group className='mb-3' controlId='title'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type='text'
                placeholder={question.title}
                value={title}
                onChange={event => setTitle(event.target.value)}
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='body'>
              <Form.Label>Question Body</Form.Label>
              <Form.Control
                value={body}
                as='textarea'
                rows={3}
                placeholder={question.body}
                onChange={event => setBody(event.target.value)}
              />
            </Form.Group>

            <Button variant='primary' type='submit'>
              Submit Changes
            </Button>
          </Form>
        </div>
      </>
    )
  }
}

export default EditQuestion
