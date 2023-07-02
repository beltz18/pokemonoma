import React   from 'react'
import Dash    from '@p/dash'
import Router  from 'next/router'

const Dashboard = () => {
  let url = 'http://localhost:3000/api/user'

  const getUser = async () => {
    const response = await (await fetch(url)).json()
    response?.data?.status ? response : Router.push('/login')
  }
  getUser()

  return (
    <>
      <Dash />
    </>
  )
}

export default Dashboard