import React from 'react'
import Image from 'next/image'
import Link  from 'next/link'
import Popup from './popup'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link href="https://monoma.io" target='_blank'>
            <Image
              src='/assets/logo-monoma.png'
              alt='logo'
              width='150'
              height='30'
            />
          </Link>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link href='/'>
                About
              </Link>
            </li>
            <li>
              <Popup name={"Profile"} />
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar