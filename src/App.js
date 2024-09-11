import { Routes, Route } from 'react-router-dom';
import StartLearning from './pages/StartLearning';
import HomePage from './pages/HomePage';
import PageNotFound from './pages/PageNotFound';
import CreateWorld from './pages/CreateWorld';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' index element={<HomePage />} />
        <Route path='/create' element={<CreateWorld />} />
        <Route path='/start' element={<StartLearning />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
