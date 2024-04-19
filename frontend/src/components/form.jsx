import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants'
import api from '../api'
import image from '../assets/login.png'
import '../styles/form.css'

function Form({ route, method }) {
    const [userName, setUserName] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [userEmail, setUserEmail] = useState("")

    const navigate = useNavigate()
    const name = method === 'login' ? "login" : "register"
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (method == "login") {
                const res = await api.post(route, { username: userName, password: userPassword });
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh)
                navigate('/')
            }
            else {
                const res = await api.post(route, { username: userName, email:userEmail, password: userPassword });
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh)
                navigate("/login")
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                alert("Credentials are wrong");
                navigate("/register")
            }else {
                alert("An error occurred. Please try again later.");
            }
        }
    }
    return (
        <div className='login-signup-container'>
            <div className="form-container">
                <h2 className='heading'>{(name.toUpperCase())}</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='userName-lable' htmlFor="username">Username</label>
                        <input id='username' type="text" name='username' placeholder='Admin' value={userName} onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    {method === "login" ? <></> :<div>
                        <label className='email-lable' htmlFor="email">Email</label>
                        <input id='email' type='email' name='email' placeholder='Email' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                    </div>}
                    <div>
                        <label className='pswd-lable' htmlFor="password"><p>Password</p>

                        {method === "login"?    <a className='forget-text'>Forgot?</a>:<></>}</label>
                        <input id='password' value={userPassword} type="password" name="password" placeholder='Enter Password' onChange={(e) => setUserPassword(e.target.value)} />
                    </div>
                    <div>
                        <button className='form-button' type='submit'>{name.toUpperCase()}</button>
                    </div>
                </form>
            </div>
            <div className='svg-container'>
                <img src={image} alt="" className='login-png' />
            </div>
        </div>
    )
}

export default Form;