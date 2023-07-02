import React         from 'react'
import PokedexXYform from '@p/pokedexXYform'
import Router        from 'next/router'

const Login = () => {
  let url = 'http://localhost:3000/api/user'

  const getUser = async () => {
    const response = await (await fetch(url)).json()
    response?.data?.status ? Router.push('/dashboard') : response
  }
  getUser()

  return (
    <>
      <PokedexXYform />
    </>
  )
}

export default Login