import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import Home from './pages/home/home';
// import Login from './pages/login/login';
// import Register from './pages/register/register';
// import Admin from './pages/admin/admin';
// import NotFound from './pages/404/404';
// import UnAuthorized from './pages/401/401';
// import NotFound from './pages/*/*';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
        <Navbar />
        <div className="container">
          {/* <Routes> */}
            {/* <Route path='/' element={<Home />}></Route> */}
            {/* <Route path='/home' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route> */}
            {/* <Route path='/admin' element={<Admin />}></Route> */}
            {/* <Route path='/404' element={<NotFound />}></Route>
            <Route path='/401' element={<UnAuthorized />}></Route>
            <Route path='/*' element={<NotFound />}></Route> */}
          {/* </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
