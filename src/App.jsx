import Home from './pages/Home'
import './App.css'
import {BrowserRouter as Router  , Routes  , Route} from "react-router-dom"
import CategoriesPage from './pages/CategoriesPage'
import GigPage from './pages/GigPage'
import User from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import { useSelector } from 'react-redux'
import GuidePage from './pages/GuidePage'
import SubCategoryPage from './pages/SubCategoryPage'
import Hire from './pages/Hire'
import Proservice from './pages/Proservice'
import WorkSpace from './pages/WorkSpace'

function App() {
const user = useSelector((state)=>state.user);
  return (
    <>
    <Router>
      <Routes>  
        <Route exact path = "/" element={<Home/>}/>
        <Route path = "/guide/:id" element={<GuidePage/>}/>
        <Route path = "/login" element={<Login/>}/>
        <Route path = "/register" element={<Register/>}/>
        <Route path = "/categories/:type/:title" element={user.currentUser?<SubCategoryPage/>: <Login/>}/>
        <Route path = "/categories/:type" element={user.currentUser?<CategoriesPage/>: <Login/>}/>
        <Route path = "/gig/:type/:id" element={user.currentUser?<GigPage/>:<Login/>}/>
        <Route path = "/user" element={user.currentUser?<User/>:<Login/>}/>
        <Route path = "/hire" element={user.currentUser?<Hire/>:<Login/>}/>
        <Route path = "/proservice" element={user.currentUser?<Proservice/>:<Login/>}/>
        <Route path = "/workspace" element={user.currentUser?<WorkSpace/>:<Login/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
