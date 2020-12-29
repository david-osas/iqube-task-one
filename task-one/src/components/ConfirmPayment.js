import Row from './Row';

function ConfirmPayment(){
  let details = [
    {
      name: 'Data science and usability',
      price: '50,000.00',
    },
    {
      name: 'Shipping',
      price: '0.00',
    }
  ]
  let total = '50,000.00';

  return(
    <div className='app-card-details'>
      <div className='app-card-header'>
        <Row first='Item Name' second='# Price'/>
      </div>
      {details.map((item) => <div className='app-card-text'>
        <Row first={item.name} second={item.price}/>
      </div>)}
      <hr className='app-rule'/>
      <div className='app-row app-card-total'>
        <span>Total</span>
        <span>{total}</span>
      </div>
    </div>

  );
}

export default ConfirmPayment;
