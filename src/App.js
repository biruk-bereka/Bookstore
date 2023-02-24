import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Bookstore from './components/Bookstore';

function App() {
  return (
    <BrowserRouter>
      <Bookstore />
    </BrowserRouter>
  );
}

export default App;
