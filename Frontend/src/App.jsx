import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './pages/client/layouts/Layout'
import Home from './pages/home/Home'
import News from './pages/client/News/News'
import ProfileClient from './pages/client/profile/ProfileClient';
import Booking from './pages/client/datLich/Booking'
import NewsDetail from './pages/client/NewsDetail/NewsDetail'

function App() {
  return(
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='news' element={<News/>}/>
          <Route path='news/:id' element={<NewsDetail/>}/>
          <Route path='booking' element={<Booking/>} />
          <Route path='profile-client' element={<ProfileClient/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
