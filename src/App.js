import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import NotesPage from './pages/NotesPage/NotesPage';
import Login from './pages/Login/Login';
import { useEffect } from 'react';
import { getUserNotes } from './firebase/fetchData';
import { useDispatch, useSelector } from 'react-redux';
import EditNote from './pages/EditNote/EditNote';

function App() {

  const userId = useSelector(state => state.user.uid);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("APP USEEFFECT", userId);
    // loadNotes();
    getUserNotes(dispatch, userId);
  },[userId])

  return (
    <div className="App">
      <HashRouter>
      <NavBar />
        <div className='app_content'>
          <SideBar />
            <Routes>
              <Route path='/' element={<NotesPage />} />
              <Route path='/login' element={<Login />} />
              <Route path='/note/:id' element={<EditNote />} />
            </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
