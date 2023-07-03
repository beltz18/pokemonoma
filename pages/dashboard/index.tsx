import React   from 'react'
import Dash    from '@p/dash'
import Router  from 'next/router'

const Dashboard = () => {
  const getUser = async () => {
    let url = 'http://localhost:3000/api/user'
    const response = await (await fetch(url)).json()
    response?.data?.status ? response : Router.replace('/login')
  }
  getUser()

  return (
    <>
      <Dash />
    </>
  )
}

export default Dashboard