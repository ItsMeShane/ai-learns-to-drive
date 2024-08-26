import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import CreateRoad from './pages/create-road/CreateRoad';
import StartLearning from './pages/StartLearning';
import TuneParameters from './pages/TuneParameters';
import HomePage from './pages/HomePage';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' index element={<HomePage />} />
        <Route path='/create' element={<CreateRoad />} />
        <Route path='/tune' element={<TuneParameters />} />
        <Route path='/start' element={<StartLearning />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
