import React from 'react'
import About from './About';
import Home from './Home';
import Header from './Header';
import Missing from './Missing';
import Nav from './nav';
import Newpost from './Newpost';
import Postpage from './Postpage';
import Postlayout from './Postlayout';
import Post from './Post';
import { Link, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <div className='text-bold'>
      <nav className='text-blue'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/postpage'>Postpage</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/newpost' element={<Newpost />} />
        <Route path='/postpage' element={<Postlayout/>} >
          <Route index element={<Postpage />} />
          <Route path=':id' element={<Post />} />
          <Route path='newpost' element={<Newpost />} />
        </Route>
        <Route path='*' element='missing'>Missing</Route>
      </Routes>
      {/* <Home />
      <Header />
      <About />
       <Nav/>
       <Missing />
       <Newpost />
       <Postpage /> */}
    </div>
  )
}

export default App;