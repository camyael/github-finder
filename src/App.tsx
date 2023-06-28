// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Searcher from './pages/Searcher';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Searcher/>}/>
        <Route path='/:user' element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
