function Button({name, handleClick, idName, modifier}){
  return(
    <button onClick={handleClick} className={`btn btn--${name} btn--${modifier}`} style={{backgroundImage: `url(../images/${name}.svg)`}} data-name={idName}>
    </button>
  )
}