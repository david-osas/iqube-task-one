import PlainInput from './PlainInput';
import SelectInput from './SelectInput';
import FormGroup from './FormGroup';

import {personal, personalGroup, billing, billingGroup} from '../formDetails';

function Form({stage}){

  let data, dataGroup;

  switch(stage){
    case 'personal':
    data = personal;
    dataGroup = personalGroup;
    break;

    case 'billing':
    data = billing;
    dataGroup = billingGroup;
    break;

    default:
    data = personal;
    dataGroup = personalGroup;
  }

  return(
    <form>
      {
        data.map((item) => <div key={item.title} className="mb-3">
          {item.type === 'select'
          ? <SelectInput item={item} />
          : <PlainInput item={item} />}
        </div>)
      }

      <FormGroup data={dataGroup} stage={stage} />

    </form>
  );
}

export default Form;
