import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
// import Films from './pages/Films';
import Home from './pages/Home';
import FullMovie from './components/FullMovie';
// import Search from './pages/Search';
// import Serials from './pages/Serials';


const Films = lazy(() => import('./pages/Films'));
const Serials = lazy(() => import('./pages/Serials'));
const Search = lazy(() => import('./pages/Search'));

function App() {

  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/films' element={<Films />} />
          <Route path='/films/:filmsId' element={<FullMovie />} />
          <Route path='/serials' element={<Serials />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
