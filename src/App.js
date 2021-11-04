// import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import ChatRoom from './components/ChatRoom';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AuthProvider from './components/Context/AuthProvider';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/" element={<ChatRoom />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
