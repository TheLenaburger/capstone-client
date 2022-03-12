import axios from 'axios'
import apiUrl from '../apiConfig'

export const getOneQuestion = (user, id) => {
  return axios.get(`${apiUrl}/questions/${id}/`, {
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const createQuestion = (user, title, body) => {
  return axios.post(
    `${apiUrl}/questions/`,
    {
      question: {
        title,
        body,
        owner: user.id
      }
    },
    {
      headers: {
        Authorization: `Token ${user.token}`
      }
    }
  )
}

export const showAllQuestions = () => {
  return axios.get(
    `${apiUrl}/questions/`
  )
}

export const updateQuestion = (title, body, user, id) => {
  return axios.patch(
    `${apiUrl}/questions/${id}/`,
    {
      question: {
        title,
        body,
        owner: user.id
      }
    },
    {
      headers: {
        Authorization: `Token ${user.token}`
      }
    }
  )
}

export const deleteQuestion = (user, id) => {
  return axios.delete(
    `${apiUrl}/questions/${id}`,
    {
      headers: {
        Authorization: `Token ${user.token}`
      }
    }
  )
}
