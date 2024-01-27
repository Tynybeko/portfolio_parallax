import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomeLayout from './pages/HomeLayout'
import Home from './pages/home'
function App() {

  return (
    <Routes>
      <Route path='/' element={<HomeLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
