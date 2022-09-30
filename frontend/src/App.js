import './App.css';
import ScanScreen from './pages/ScanScreen';
import Navbar from './components/Navbar';
import RegisterScreen from './pages/RegisterScreen';
import PageNotFound404 from './pages/PageNotFound404';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to='/register' />} />
        <Route path='/scan/:petID' element={<ScanScreen />} />
        <Route path='/register' element={<RegisterScreen />} />
        <Route path='*' element={<PageNotFound404 />} />
      </Routes>
    </Router>
  );
}

export default App;
