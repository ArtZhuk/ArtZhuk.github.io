function ListItem ({item, handleChange, handleDelete}){
  const isChecked = item.checked ? "checked" : "unchecked";
  
  return (
    <li className="list__list-item">
      <div>
        <label htmlFor={`checkbox-${item.name}`} className="list__container">
          {item.name}
          <input type="checkbox" onChange={ev => handleChange(ev.target)}name="checkbox" id={`checkbox-${item.name}`} className="list__checkbox" checked={item.checked ? true : false} data-name={item.name} />
          <span className={"list__checkmark list__checkmark--" + isChecked}></span>
        </label>
      </div>
      <Button name="cancel" handleClick={ev => handleDelete(ev.target)} modifier="small" idName={item.name} />
    </li>
  )
}