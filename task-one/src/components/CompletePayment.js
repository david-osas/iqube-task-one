import {Link} from 'react-router-dom';
import check from '../check.png';

function CompletePayment(){

  return(
    <div className='complete-card'>
      <img src={check} className='payment-icon' alt='complete payment' />
      <span className='complete-heading'>Purchase Completed</span>
      <p>Please check your email for details concerning this transaction</p>
      <Link to='/' className='complete-link'>Return Home</Link>
    </div>
  );
}

export default CompletePayment;
