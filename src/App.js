import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import UserList from './components/UserList';
import UserProfile from './components/pages/UserProfile';
import {UserContextApi} from './components/UserContextApi';
import AddUserForm from './components/pages/AddUserForm';

function App() {
  return (
    <div>
      <UserContextApi>
      <Router>
        <Routes>
          <Route path='/' element={<UserList />}/>
          <Route path='/profile/:userId' element={<UserProfile/>} />
          <Route path='/addUser' element={<AddUserForm/>}/>
        </Routes>
      </Router>
      </UserContextApi>
    </div>
  );
}


export default App;
