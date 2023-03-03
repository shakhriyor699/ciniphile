import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// import Films from './pages/Films';
import Home from './pages/Home';
// import Search from './pages/Search';
// import Serials from './pages/Serials';


const Films = lazy(() => import('./pages/Films'));
const Serials = lazy(() => import('./pages/Serials'));
const Search = lazy(() => import('./pages/Search'));

function App() {
 


  return (
    <div className="App">
      <Suspense fallback='loading'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/films' element={<Films />} />
          <Route path='/serials' element={<Serials />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
