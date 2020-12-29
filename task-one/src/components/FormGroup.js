import PlainInput from './PlainInput';
import SelectInput from './SelectInput';

function FormGroup({data}){

  return(
    <div className='row row-cols-md-2 row-cols-1'>
      {data.map((item) => <div key={item.title} className='col'>
        {item.type === 'select'
        ? <SelectInput item={item} />
        : <PlainInput item={item} />}
      </div>)}

    </div>
  );
}

export default FormGroup;
