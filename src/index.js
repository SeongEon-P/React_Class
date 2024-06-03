import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter03/Library'; 
import Clock from './chapter04/Clock';
import CommentList from './chapter05/CommentList';
import NotificationList from './chapter06/NotificationList';
import Accommodate from './chapter07/Accommodate';
import ConfirmButton from './chapter08/ComfirmButton';
import LandingPage from './chapter09/LandingPage';
import AttendanceBook from './chapter10/AttendanceBook';
import SignUp from './chapter11/SignUp';
import Calculator from './chapter12-1/Calculator';
import ProfileCard from './chapter13/ProfileCard';
import DarkOrLight from './chapter14/DarkOrLight';
import Blocks from './chapter15/Blocks';
import ConfirmDialog from './chapter4-1/ConfirmDialog';
import Counter from './chapter07/Counter';
import Info from './chapter07/Info';
import Average from './chapter07/Average';
import Say from './chapter08/Say';
import EventPractice from './chapter08/EventPractice';
import InterationSample from './chapter10/InterationSample';
import LoginControl from './chapter09/LoginControl';
import MainPage from './chapter09/MainPage';
import NameForm from './chapter11/NameForm';
import WelcomeDialog from './chapter13/WelcomeDialog';
import SignUpdialog from './chapter13/SingUpDialog';
import SignUp2 from './chapter11/SingUp2';
// import Greeting from './chapter09/Greeting';

const root = ReactDOM.createRoot(document.getElementById('root'));
// setInterval(() => {
  root.render(
    <React.StrictMode>
      <SignUp2 />
      {/* <SignUpdialog /> */}
      {/* <WelcomeDialog /> */}
      {/* <NameForm /> */}
      {/* <LandingPage /> */}
      {/* <MainPage /> */}
      {/* <Greeting/> */}
      {/* <LoginControl /> */}
      {/* <InterationSample/> */}
      {/* <EventPractice /> */}
      {/* <Calculator /> */}
      {/* <ProfileCard /> */}
      {/* <DarkOrLight /> */}
      {/* <Blocks /> */}
      {/* <ConfirmDialog /> */}
      {/* <ProfileList /> */}
      {/* <CommentList /> */}
      {/* <Counter /> */}
      {/* <Info/> */}
      {/* <Say/> */}
      {/* <App /> */}
      {/* <Average /> */}
    </React.StrictMode>
  );
  
// }, 1000);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
