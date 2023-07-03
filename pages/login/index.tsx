import React         from 'react'
import PokedexXYform from '@p/pokedexXYform'
import Router        from 'next/router'

const getUser = async () => {
  let url = 'http://localhost:3000/api/user'
  const response = await (await fetch(url)).json()
  response?.data?.status ? Router.replace('/dashboard') : response
}
getUser()

const Login = () => {
  return (
    <>
      <PokedexXYform />
    </>
  )
}

export default Login