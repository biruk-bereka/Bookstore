import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import Bookstore from './components/Bookstore';
import store from './redux/store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Bookstore />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
