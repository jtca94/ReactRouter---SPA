
import { Routes, Route } from 'react-router-dom'
import DrawerAppBar from './components/NavBar'
import Home from './pages/home'
import Footer from './components/Footer'
import Contact from './pages/contact'
import Products from './pages/products'
function App() {


  return (
    <div>
      <nav >
        <DrawerAppBar />
      </nav>
      <main className='container'>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/products'
            element={<Products />}
          />
          <Route
            path='/contact'
            element={<Contact />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
