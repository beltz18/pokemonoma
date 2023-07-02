import React         from 'react'
import PokedexXYform from '@p/pokedexXYform'
import Router        from 'next/router'

const Login = () => {
  let url = 'https://pokemonoma.vercel.app/api/user'

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