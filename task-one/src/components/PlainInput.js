
function PlainInput({item}){

  return(
    <>
    <label htmlFor={item.title} className="form-label custom-form-label">{item.title}</label>
    {item.text && <div id={item.text} className="form-text custom-form-text">{item.text}</div>}
    <input type={item.type} className="form-control" id={item.title} aria-describedby={item.text}/>
    </>
  );
}

export default PlainInput;
