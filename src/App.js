import { Provider } from 'react-redux';
import SearchBar  from './components/SearchBar';
import DisplayResults from './components/DisplayResults'
import './stylesheets/App.css';

function App({ store }) {
  return (
    <Provider store={store} > 

    <div className="App"> 
    <div className="inner-app">

      <SearchBar />
      <DisplayResults />
    </div>
    </div>
      </Provider>
  );
}

export default App;
