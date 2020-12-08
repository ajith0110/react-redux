
import './App.css';
import AddPost from './components/AddPost';
import Posts from './components/Posts';

import {Provider} from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AddPost/>
        <Posts/>
        
      </div>
    </Provider>
  );
}

export default App;
