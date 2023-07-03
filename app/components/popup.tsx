import React from 'react'
import Image from 'next/image'

const Popup = ({ name }: any) => {
  const [showMenu, setShowMenu] = React.useState(false)

  return (
    <>
      <div className="popup">
        <div className="profile">
          <Image
            src='/assets/lucario.png'
            alt={name}
            width='60'
            height='60'
            onClick={() => { setShowMenu(!showMenu) }}
          />
        </div>
        <div className={`menu ${showMenu ? "active" : ""}`}>
          <h3>
            Username<br />
            <span>Email</span>
          </h3>
          <ul>
            <li><i className='bi bi-power'></i> Logout</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Popup