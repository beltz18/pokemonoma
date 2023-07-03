import React  from 'react'
import Image  from 'next/image'
import Router from 'next/router'

const Popup = ({ name }: any) => {
  const [showMenu, setShowMenu] = React.useState(false)
  const [user, setUser]         = React.useState({name: '',email: ''})
  let url = 'http://localhost:3000/api'

  const logout = async () => {
    await fetch(url+'/logout')
    Router.replace('/login')
  }

  new Promise(async () => {
    const response = await (await fetch(url+'/user')).json()
    setUser(response?.data?.data)
  })

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
            { user?.name }<br />
            <span>{ user?.email }</span>
          </h3>
          <ul>
            <li onClick={() => logout() }><i className='bi bi-power'></i> Logout</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Popup