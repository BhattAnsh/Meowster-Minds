import React from 'react'
import Form from '../components/form'

function LoginSignup({method}) {
  return (
    <>
        {method === "login"?<Form route = "patient/token/" method = "login"></Form>:<Form route = "patient/register/" method='register'></Form>}
    </>
  )
}

export default LoginSignup