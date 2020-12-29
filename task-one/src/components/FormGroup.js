import PlainInput from './PlainInput';
import SelectInput from './SelectInput';

function FormGroup({data, stage}){

  let grid = stage === 'billing'? '3' : '2';

  return(
    <div className={`row row-cols-md-${grid} row-cols-1`}>
      {data.map((item) => <div key={item.title} className='col'>
        {item.type === 'select'
        ? <SelectInput item={item} />
        : <PlainInput item={item} />}
      </div>)}

    </div>
  );
}

export default FormGroup;
