import logo from './logo.svg';
import './App.css';
import { Route ,Routes, BrowserRouter as Router} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Users from './components/users';
import Header from './components/header';

function App() {
  return (
    <div>
      <Router>
      <Header/>
      <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users />} />
        </Routes>
        </Router>
    </div>
  );
}

export default App;
