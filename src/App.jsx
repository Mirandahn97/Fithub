import { DetailPage } from './pages/DetailPage/DetailPage'
import { HomePage } from './pages/HomePage/HomePage'
import {LandingPage} from './pages/LandingPage/LandingPage'
import { BrowserRouter, Routes, Route } from 'react-router'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='/home' element={<HomePage/>}></Route>
      <Route path='/home/:id' element={<DetailPage/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
