function Button({name, handleClick, idName, modifier}){
  return(
    <button onClick={handleClick} className={`btn btn--${name} btn--${modifier}`} style={{backgroundImage: `url(https://raw.githubusercontent.com/ArtZhuk/ArtZhuk.github.io/28050e047e07b6eac6dff538e37ef26389985189/shopping-list_react/images/${name}.svg)`}} data-name={idName}>
    </button>
  )
}
