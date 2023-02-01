
import { Routes, Route } from 'react-router-dom'
import DrawerAppBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/home'
import Contact from './pages/contact'
import Products from './pages/products'
import NotFound from './pages/notFound'
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
          <Route
            path='*'
            element={<NotFound />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
