import React from 'react';
import './App.css';
import CampsitesList from './features/CampsitesList';
import Header from './components/Header';
import Footer from './components/Footer';
import { CAMPSITES } from './app/shared/CAMPSITES';



function App() {
  return (
  <div className='App'>
    <Header />
        <CampsitesList campsites={CAMPSITES} />
    <Footer />
  </div>
    );
}

export default App;
