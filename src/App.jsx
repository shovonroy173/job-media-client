import Home from './pages/Home'
import './App.css'
import {BrowserRouter as Router  , Routes  , Route} from "react-router-dom"
import CategoriesPage from './pages/CategoriesPage'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route exact path = "/" element={<Home/>}/>
        <Route exact path = "/categories" element={<CategoriesPage/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
