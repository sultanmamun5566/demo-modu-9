import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Notfound from './components/Notfound/Notfound';
import Friends from './components/Friends/Friends';
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Culture from './components/Culture/Culture';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header  exact path="/" element={<Home></Home>}></Header>
      <Routes>
         <Route></Route> 
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/friends' element={<Friends></Friends>}> </Route>
        <Route path='friend/:friendId' element={<FriendDetail></FriendDetail>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/about/culture' element={<Culture></Culture>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
