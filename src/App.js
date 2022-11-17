import React from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import { Header } from './components/header/Header';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Contact from './pages/contacts/Contacts';
import SignUp from './components/signup/SignUp';
import Signin from './components/signin/Signin';
import ChoosePassword from './components/password/ChoosePassword';
import Profile from './pages/profile/Profile';

function App() {

  const user = localStorage.getItem("token");

  return (
    <React.Fragment>
      <header>
       {<Header />}
      </header>

      <main className='container'>
        <Routes>
          <Route path="/" element={<Home />}/>
          {user && <Route path="/contacts" element={<Contact />} exact/>}
          <Route path="/signup" element={<SignUp />} exact />
          <Route path="/signin" element={<Signin />} exact />
          <Route path="/choose-password" element={<ChoosePassword />} exact />
          <Route path="/profile" element={<Profile />}/>
        </Routes>
      </main>

      <footer>
        {user && <Footer />}
      </footer>
    </React.Fragment>
  );
}

export default App;
