import React   from 'react'
import Dash    from '@p/dash'
import Router  from 'next/router'

const getUser = async () => {
  let url = 'https://pokemonoma-kibp7r19a-andidev.vercel.app/api/user'
  const response = await (await fetch(url)).json()
  response?.data?.status ? response : Router.replace('/login')
}
getUser()

const Dashboard = () => {
  return (
    <>
      <Dash />
    </>
  )
}

export default Dashboard