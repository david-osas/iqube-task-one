import {Switch, Route} from 'react-router-dom';
import Form from './Form';
import Tab from './Tab';
import ConfirmPayment from './ConfirmPayment';
import CompletePayment from './CompletePayment';
import ButtonGroup from './ButtonGroup';

function App() {
  let stages = ['personal', 'billing', 'payment'];
  return (
    <div className='app-container'>
      <Switch>
        <Route exact path='/'>
          <h1 className='app-heading'>Complete your Purchase</h1>
          <Tab stage={stages[0]} />
          <Form stage={stages[0]} />
          <ButtonGroup stage={stages[0]} />
        </Route>

        <Route exact path='/billing'>
          <h1 className='app-heading'>Complete your Purchase</h1>
          <Tab stage={stages[1]} />
          <Form stage={stages[1]} />
          <ButtonGroup stage={stages[1]}/>
        </Route>

        <Route exact path='/payment'>
          <h1 className='app-heading'>Complete your Purchase</h1>
          <Tab stage={stages[2]} />
          <ConfirmPayment />
          <ButtonGroup stage={stages[2]}/>
        </Route>

        <Route exact path='/complete'>
          <CompletePayment />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
