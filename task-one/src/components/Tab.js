
function Tab(){

  return(
    <div className='app-tab'>
      <span to='/' className='tab-link' >Personal Info</span>
      <span to='/billing' className='tab-link' >Billing Info</span>
      <span to='/payment' className='tab-link' >Confirm Payment</span>
    </div>
  );
}

export default Tab;
