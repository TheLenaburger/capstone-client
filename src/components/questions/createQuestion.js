import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { createQuestion } from '../../api/question'
import { createQuestionFailure } from '../AutoDismissAlert/messages'

import { Form, Button } from 'react-bootstrap'

const CreateQuestion = ({ msgAlert, user }) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [shouldNavigate, setShouldNavigate] = useState(false)

  if (!user) {
    return <Navigate to='/sign-in' />
  }

  const onSubmitForm = async event => {
    event.preventDefault()

    try {
      await createQuestion(user, title, body)
      setShouldNavigate(true)
    } catch (error) {
      setTitle('')
      setBody('')
      msgAlert({
        heading: 'Question creation failed',
        message: createQuestionFailure,
        variant: 'danger'
      })
    }
  }

  if (shouldNavigate) {
    return <Navigate to='/questions' />
  }

  return (
    <div className='row'>
      <Form className='ownershipReq' onSubmit={onSubmitForm}>
        <Form.Group className='mb-3' controlId='title'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type='text'
            placeholder='Question Title'
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
            placeholder='What do you want to ask the world?'
            onChange={event => setBody(event.target.value)}
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit Question
        </Button>
      </Form>
    </div>
  )
}

export default CreateQuestion
