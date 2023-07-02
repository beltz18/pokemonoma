import React  from 'react'
import Loader from '@p/loader'
import Router from 'next/router'

const LoaderPage = () => {
  setTimeout(() => { Router.push('/dashboard') }, 3800)

  return (
    <>
      <Loader />
    </>
  )
}

export default LoaderPage