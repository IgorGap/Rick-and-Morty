import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import BigCard from './components/BigCard/BigCard';
import Fav from './components/Fav/Fav';
import Main from './components/Main/Main';
import MyNavbar from './components/MyNavbar/MyNavbar';

function App() {
  const [flag, setFlag] = useState(false);
  const location = useLocation();

  return (
    <div className="App">
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/fav" element={<Fav />} />
        <Route path="/:id" element={<BigCard />} />
        <Route path="*" element={<div>Такой страницы не существует!</div>} />
      </Routes>
    </div>
  );
}

export default App;
