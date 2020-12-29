import PlainInput from './PlainInput';
import FormGroup from './FormGroup';
import ButtonGroup from './ButtonGroup';

import {personal, personalGroup} from '../formDetails';

function Form(){

  return(
    <form>
      {
        personal.map((item) => <div key={item.title} className="mb-3">
          <PlainInput item={item} />
        </div>)
      }

      <FormGroup data={personalGroup} />

      <ButtonGroup />
    </form>
  );
}

export default Form;
