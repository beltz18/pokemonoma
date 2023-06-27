import React from 'react'
import Image from 'next/image'

const Loader = () => {
  return (
    <>
      <div className="bg">
        <div className="loader-butterfree">
          <Image
            src='/assets/butterfree.gif'
            alt='butterfree gif'
            width='315'
            height='305'
          />
        </div>
        <div className='loader'>
          <div className="loader-box">
            <div className='loader-box-top'></div>
            <div className='loader-box-middle-top'></div>
            <div className='loader-box-middle-bottom'></div>
            <div className='loader-box-center'></div>
            <div className='loader-box-center'></div>
            <div className='loader-box-bottom'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Loader