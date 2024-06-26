import react from 'react'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import ProtectedRoute from './components/protectedRoute';
import Home from './pages/home';
import LoginSignup from './pages/loginSignup';
import "./styles/app.css"
import Dashboard from './pages/dashboard';
import Error from './pages/error';
import HospitalsList from './pages/hopitalList/hospitalsList';


function App() {
  function RegisterAndLogout(){
    localStorage.clear()
    return <LoginSignup method="register"></LoginSignup>
  }
  function Logout(){
    localStorage.clear()
    return <Navigate to='/login'/>
  }
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<ProtectedRoute><Home/></ProtectedRoute>}></Route>
        <Route path='/login' element = {<LoginSignup method="login"></LoginSignup>}></Route>
        <Route path='/logout' element = {<Logout/>}></Route>
        <Route path='/register' element = {<RegisterAndLogout/>}></Route>
        <Route path='/dashboard' element = {<Dashboard></Dashboard>}></Route>
        <Route path='/error' element = {<Error> </Error>}></Route>
        <Route path='/hlist' element = {<HospitalsList></HospitalsList>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
