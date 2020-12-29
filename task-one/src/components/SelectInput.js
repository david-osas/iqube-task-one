
function SelectInput({item}){

  return(
    <>
    <label htmlFor={item.title} className="form-label custom-form-label">{item.title}</label>
    {item.text && <div id={item.text} className="form-text custom-form-text">{item.text}</div>}

    <select className="form-select" aria-label={item.title}
      id={item.title} aria-describedby={item.text} >
      {item.options.map((selectValue) => <option key={selectValue} value={selectValue}>
        {selectValue}
      </option>)}
    </select>
    </>
  );
}

export default SelectInput;
