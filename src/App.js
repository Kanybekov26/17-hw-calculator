import { Provider } from 'react-redux';
import { store } from './store';
import Auth from './components/Auth';
import Header from './components/Header';
import Calculator from './components/Counter';

function App() {
  return (
    <Provider store={store}>
      <Header/>
    <Calculator />
     <Auth/>
    </Provider>
  );
}

export default App;
