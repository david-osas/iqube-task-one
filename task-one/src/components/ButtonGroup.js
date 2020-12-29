import {useHistory} from 'react-router-dom';

function ButtonGroup({stage}){
  let history = useHistory();
  let btnFilledText = stage === 'payment'? 'Pay' : 'Next';

  function nextStage(){
    if(stage === 'personal'){
      history.push('/billing');

    }else if(stage === 'billing'){
      history.push('/payment');

    }else if(stage === 'payment'){
      history.push('/complete');

    }else{
      history.push('/personal');
    }
  }

  return(
    <div className='app-btn-group'>
      <button type='button' className="btn app-btn-filled" onClick={nextStage}>{btnFilledText}</button>
      <span className='app-btn-text'>Cancel Payment</span>
    </div>
  );
}

export default ButtonGroup;
