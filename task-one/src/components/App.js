import {Switch, Route} from 'react-router-dom';
import Form from './Form';
import Tab from './Tab';
import ConfirmPayment from './ConfirmPayment';
import CompletePayment from './CompletePayment';
import ButtonGroup from './ButtonGroup';

function App() {
  return (
    <div className='app-container'>
      <Switch>
        <Route exact path='/'>
          <h1 className='app-heading'>Complete your Purchase</h1>
          <Tab />
          <Form stage='personal' />
          <ButtonGroup stage='personal' />
        </Route>

        <Route exact path='/billing'>
          <h1 className='app-heading'>Complete your Purchase</h1>
          <Tab />
          <Form stage='billing' />
          <ButtonGroup stage='billing'/>
        </Route>

        <Route exact path='/payment'>
          <h1 className='app-heading'>Complete your Purchase</h1>
          <Tab />
          <ConfirmPayment />
          <ButtonGroup stage='payment'/>
        </Route>

        <Route exact path='/complete'>
          <CompletePayment />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
