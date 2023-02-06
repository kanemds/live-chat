import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Chat from './components/Chat'
import Layout from './components/Layout'
import Login from './components/Login'
import NotFound from './components/NotFound'
import Register from './Register'



function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='*' element={<NotFound />} />
          <Route index element={<Chat />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>


      </Routes>
    </BrowserRouter>
  )
}

export default App
