import React  from 'react'
import Loader from '@p/loader'
import Router from 'next/router'

const LoaderPage = () => {
  setTimeout(() => { Router.push('/dashboard') }, 3700)

  return (
    <>
      <Loader />
    </>
  )
}

export default LoaderPage