import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Chat from './components/Chat'
import Layout from './components/Layout'
import NotFound from './components/NotFound'



function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='*' element={<NotFound />} />
          <Route index element={<Chat />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
