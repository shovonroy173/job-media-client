import Home from './pages/Home'
import './App.css'
import {BrowserRouter as Router  , Routes  , Route} from "react-router-dom"
import CategoriesPage from './pages/CategoriesPage'
import GigPage from './pages/GigPage'
import User from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import { useSelector } from 'react-redux'

function App() {
const user = useSelector((state)=>state.user);
  return (
    <>
    <Router>
      <Routes>  
        <Route exact path = "/" element={<Home/>}/>
        <Route path = "/login" element={<Login/>}/>
        <Route path = "/register" element={<Register/>}/>
        <Route path = "/categories/:type" element={user.currentUser?<CategoriesPage/>: <Login/>}/>
        <Route path = "/gig/:type/:id" element={user.currentUser?<GigPage/>:<Login/>}/>
        <Route path = "/user" element={user.currentUser?<User/>:<Login/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
