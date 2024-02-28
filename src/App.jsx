import Home from './pages/Home'
import './App.css'
import {BrowserRouter as Router  , Routes  , Route} from "react-router-dom"
import CategoriesPage from './pages/CategoriesPage'
import GigPage from './pages/GigPage'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route exact path = "/" element={<Home/>}/>
        <Route path = "/categories" element={<CategoriesPage/>}/>
        <Route path = "/gig" element={<GigPage/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
