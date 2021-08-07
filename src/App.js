import { Provider } from 'react-redux';
import SearchBar  from './components/SearchBar';
import DisplayResults from './components/DisplayResults'
import './App.css';

function App({ store }) {
  return (
    <Provider store={store} > 

    <div className="App">
      <SearchBar />
      <DisplayResults />
    </div>
      </Provider>
  );
}

export default App;
