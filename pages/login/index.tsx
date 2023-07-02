import React         from 'react'
import PokedexXYform from '@p/pokedexXYform'
import axios         from 'axios'
import Router        from 'next/router'

const Login = () => {
  const getUser = async () => {
    const response = await axios.get('/api/user')
    const { data } = response.data
    data ? Router.push('/dashboard') : data
    return { data: response.data }
  }
  getUser()

  return (
    <>
      <PokedexXYform />
    </>
  )
}

export default Login