import {Switch, Route} from 'react-router-dom';
import Form from './Form';

function App() {
  return (
    <div className='app-container'>
      <Switch>
        <Route exact path='/'>
          <h1 className='app-heading'>Complete your Purchase</h1>
          <Form />
        </Route>
        <Route exact path='/billing'>
          <h1 className='app-heading'>Complete your Purchase</h1>
          <Form />
        </Route>
        <Route exact path='/payment'>
          <h1 className='app-heading'>Complete your Purchase</h1>
          <Form />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
