import { useState, createContext } from 'react';
import Menubar from './components/Menubar';
import Hero from './components/Hero';
import './App.css';

export const UserInfoContext = createContext(null);

function App() {
  const [user, setUser] = useState(null)
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <UserInfoContext.Provider value={{user, setUser, IsLoggedIn, setIsLoggedIn}}>
      <Menubar />
      <Hero />
    </UserInfoContext.Provider>
  );
}

export default App;
