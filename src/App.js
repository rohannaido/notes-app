import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import NotesPage from './pages/NotesPage/NotesPage';
import Login from './pages/Login/Login';
import { useState, useEffect } from 'react';
import { getUserNotes } from './firebase/fetchData';
import { useDispatch, useSelector } from 'react-redux';
import EditNote from './pages/EditNote/EditNote';
import { updateProfile } from 'firebase/auth';
import { getAuth } from 'firebase/auth'
import SignUp from './pages/Login/SignUp';
import { getCurrUserId } from './firebase/auth';
import ComingSoon from './pages/ComingSoon/ComingSoon';

function App() {

  const [drawer, setDrawer] = useState(false);
  const userId = useSelector(state => state.user.uid);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("APP USEFFECT", userId);
    getUserNotes(dispatch, userId);
  },[userId])

  return (
    <div className="App">
      <HashRouter>
      <NavBar setDrawer={setDrawer} />
        <div className='app_content'>
          <SideBar drawer={drawer}/>
            <Routes>
              <Route path='/' element={<NotesPage />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signUp' element={<SignUp />} />
              <Route path='/note/:id' element={<EditNote />} />
              <Route path='/soon' element={<ComingSoon />} />
            </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
