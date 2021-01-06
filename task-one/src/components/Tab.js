import tabBar from '../bar.svg';

function Tab({stage}){
  let tabsColor = {personal: '', billing: '', payment: ''};
  tabsColor[stage] = 'tab-color';
  let barPosition = '';
  switch(stage){
    case 'personal':
    barPosition = 'tab-bar-start';
    break;

    case 'billing':
    barPosition = 'tab-bar-center';
    break;

    case 'payment':
    barPosition = 'tab-bar-end';
    break;

    default:
    barPosition = 'tab-bar-start';
  }

  return(
    <div>
      <div className='app-tab'>
        <span className={`tab-link ${tabsColor.personal}`} >Personal Info</span>
        <span className={`tab-link ${tabsColor.billing}`} >Billing Info</span>
        <span className={`tab-link ${tabsColor.payment}`} >Confirm Payment</span>
      </div>
      <img src={tabBar} alt='tab bar' className={`tab-bar ${barPosition}`} />
      <hr />
    </div>
  );
}

export default Tab;
