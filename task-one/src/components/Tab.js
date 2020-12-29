import {Link} from 'react-router-dom';

function Tab(){

  return(
    <div className='app-tab'>
      <Link to='/' className='tab-link' >Personal Info</Link>
      <Link to='/billing' className='tab-link' >Billing Info</Link>
      <Link to='/payment' className='tab-link' >Confirm Payment</Link>
    </div>
  );
}

export default Tab;
