import React   from 'react'
import Navbar  from '@c/navbar'
import Pokedex from '@c/pokedex'

const Dash = () => {
  return (
    <>
      <div style={{marginBottom: '5rem'}}>
        <Navbar />
        <Pokedex />
      </div>
    </>
  )
}

export default Dash