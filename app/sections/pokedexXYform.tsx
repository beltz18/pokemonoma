import React from 'react'
import axios from 'axios'
import {
  ToastContainer,
  toast
} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function PokedexXYform () {
  const [show, setShow] = React.useState(false)
  const regexEmail = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
  const regexPass  = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/
  const notifyError: any   = (msg: string) => toast.error(msg)
  const notifySuccess: any = (msg: string) => toast.success(msg)

  const submitHandler = async (e: any) => {
    e.preventDefault()
    const email: string = e.target[0].value
    const pass:  string = e.target[1].value

    if(!email.match(regexEmail)) notifyError(`
      The email cannot:
      start or finish with a dot, contain spaces into the string or
      contain special chars (<:, *, etc).
    `)
    else if(!pass.match(regexPass)) notifyError(`
      Password must be 8-16 characters with no space
      and contain: 1 number, 1 uppercase letter, 1
      lowercase letter and 1 non-alpha numeric number.
    `)
    else if(email && pass) {
      const response = await axios.post('/api/login', {email, password: pass})
      if (!response.data.status) notifyError(response.data.message)
      else notifySuccess(response.data.message)
    }
  }

  return (
    <>
      <div className='login'>
        <ToastContainer
          autoClose={8000}
          closeOnClick={true}
          theme="light"
        />
        <div className="login-box">
          <div className="login-box-top">
            <div className="login-box-top-border"></div>
            <div className="login-box-top-circle-inner"></div>
            <div className="login-box-top-circle"></div>
          </div>
          <div className="login-box-middle">
            <form onSubmit={(e) => { submitHandler(e) }} method='post'>
              <h1>Log In</h1>
              <div className="form">
                <div>
                  <input type="email" name='email' id="email" placeholder="Email" autoComplete='off' required />
                </div>
                <div className='pass-t'>
                  <input type={`${!show ? "password" : "text"}`} name='password' id="password" placeholder="Password" required />
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