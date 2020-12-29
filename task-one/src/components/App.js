import {Switch, Route} from 'react-router-dom';
import Form from './Form';
import Tab from './Tab';

function App() {
  return (
    <div className='app-container'>
      <Switch>
        <Route exact path='/'>
          <h1 className='app-heading'>Complete your Purchase</h1>
          <Tab />
          <Form stage='personal' />
        </Route>
        <Route exact path='/billing'>
          <h1 className='app-heading'>Complete your Purchase</h1>
          <Tab />
          <Form stage='billing' />
        </Route>
        <Route exact path='/payment'>
          <h1 className='app-heading'>Complete your Purchase</h1>
          <Tab />
          <Form stage='payment' />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
