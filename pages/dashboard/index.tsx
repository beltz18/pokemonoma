import React   from 'react'
import Dash    from '@p/dash'
import axios   from 'axios'
import Router  from 'next/router'

const Dashboard = () => {
  const getUser = async () => {
    const response = await axios.get('/api/user')
    const { data } = response.data
    data ? data : Router.push('/login')
    return { data: response.data }
  }
  getUser()

  return (
    <>
      <Dash />
    </>
  )
}

export default Dashboard