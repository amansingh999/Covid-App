import { Route, Routes } from 'react-router-dom';
import './App.css';
import Covid from './Covid';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Covid />}></Route>
      </Routes>
    </div>
  );
}

export default App;
