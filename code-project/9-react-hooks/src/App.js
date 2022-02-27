import {BrowserRouter, Route} from 'react-router-dom';
import State from './Hooks/state';
import Effect from './Hooks/effect';
import Reducer from './Hooks/reducer';
import Context from './Hooks/context/context';
import Ref from './Hooks/ref';
import Memo from './Hooks/memo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/state'>
          <State />
        </Route>
        <Route path="/effect">
          <Effect />
        </Route>
        <Route path="/reducer">
          <Reducer />
        </Route>
        <Route path="/context">
          <Context />
        </Route>
        <Route path="/ref">
          <Ref />
        </Route>
        <Route path="/memo">
          <Memo />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
