function AddItemDialog({onAddItem, onCloseDialog}) {
  const [state, setState] = React.useState("");

  function handleAdd(){
    if(state.trim()){
      onAddItem(state);
      setState("");
    } else {
      onCloseDialog();
    }
  }

  return (
    <section className="addItem">
      <input type="text" value={state} onChange={ev => setState(ev.target.value)} name="addItem__input" id="addItem__input" className="addItem__input" maxlength="17" placeholder="Добавить в список..." />
      <Button name="checkFull" handleClick={handleAdd} idName="addItem" modifier="large" />
    </section>
  )
}