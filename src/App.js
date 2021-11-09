// import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import ChatRoom from './components/ChatRoom';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AuthProvider from './components/Context/AuthProvider';
import AppProvider from './components/Context/AppProvider';
import AddRoomModal from './components/Modal/AddRoomModal';
import InviteMemberModal from './components/Modal/InviteMemberModal';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/" element={<ChatRoom />} />
          </Routes>
          <AddRoomModal/>
          <InviteMemberModal />
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
