import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar'
import { MovieType } from './components/MovieType'
import { MovieDetails } from './components/MovieDetails'
import { Footer } from './components/Footer'

function App() {

  return (
    <div className=''>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />}/>
          <Route path='movie/:id' element={<MovieDetails />}/>
          <Route path='movies/:type' element={<MovieType />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
