import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
/* import TodoWrapper from './components/TodoWrapper'; */
import Todos from './pages/Todos';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  
  return (
    <BrowserRouter>
      <div className="App">
        <section className="App-content">
          <Navbar/>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/todos' element={<Todos />} />
            {/* <TodoWrapper/> */}
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
