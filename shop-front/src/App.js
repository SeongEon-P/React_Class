import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Admin from './pages/admin/Admin';
import NotFound from './pages/not-found/NotFound';
import UnAuthorized from './pages/unauthorized/UnAuthorized';
import Profile from './pages/profile/Profile';
import { Role } from './models/Role';
import AuthGuard from './guards/AuthGuard';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path='/admin' element={<Admin />}></Route>
            <Route path='/404' element={<NotFound />}></Route>
            <Route path='/401' element={<UnAuthorized />}></Route>
            <Route path='*' element={<NotFound />}></Route>
            <Route path='/profile' element={
              <AuthGuard roles={[Role.ADMIN, Role.USER]}>
                <Profile />
              </AuthGuard>
            } />
            <Route path='/admin' element={
              <AuthGuard roles={[Role.ADMIN]}>
                <Admin />
              </AuthGuard>
            } />
          </Routes>
        </div>
    </BrowserRouter>

    </div>
  );
}

export default App;
