import React             from 'react'

const PokedexXYform = () => {
  const [show, setShow] = React.useState(false)

  return (
    <>
      <div className='login'>
        <div className="login-box">
          <div className="login-box-top">
            <div className="login-box-top-border"></div>
            <div className="login-box-top-circle-inner"></div>
            <div className="login-box-top-circle"></div>
          </div>
          <div className="login-box-middle">
            <form action='/dashboard' method='post'>
              <h1>Log In</h1>
              <div className="form">
                <div>
                  <input type="email" id="email" placeholder="Email" autoComplete='off' required />
                </div>
                <div className='pass-t'>
                  <input type={`${!show ? "password" : "text"}`} id="password" placeholder="Password" required />
                  <i className={`bi ${!show ? "bi-eye-slash" : "bi-eye"}`} id="togglePassword" onClick={() => {setShow(!show)}}></i>
                </div>
                <input type="submit" value="Login" />
              </div>
            </form>
          </div>
          <div className="login-box-bottom">
            <div className="login-box-bottom-border"></div>
            <div className="login-box-bottom-circle-inner"></div>
            <div className="login-box-bottom-circle"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PokedexXYform