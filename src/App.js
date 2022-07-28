import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import NotesPage from './pages/NotesPage/NotesPage';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className="App">
      <HashRouter>
      <NavBar />
        <div className='app_content'>
          <SideBar />
            <Routes>
              <Route path='/' element={<NotesPage />} />
              <Route path='/login' element={<Login />} />
            </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
