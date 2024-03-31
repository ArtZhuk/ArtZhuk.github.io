class App extends React.Component {
  static getIndex(array, item){
    const idx = array.findIndex(prod => prod.name === item.dataset.name);
    return [idx, [...array]];
  };
  constructor(props){
    super(props)
    this.state = {list: props.itemsToBuy, isAddItem: false}
  };

  handleCheckItem = item => {
    const [idx, stateList] = App.getIndex(this.state.list, item);
    stateList[idx].checked = !stateList[idx].checked;
    this.setState({list: stateList});
    const sourceList = JSON.parse(localStorage.getItem("list"));
    const updItemName = stateList[idx].name;
    for(const item of sourceList){
      if(item.name === updItemName){
        item.checked = !item.checked;
        break
      }
    };
    localStorage.setItem("list", JSON.stringify(sourceList));
  };

  handleDeleteItem = item => {
    const [stateIdx, stateList] = App.getIndex(this.state.list, item);
    stateList.splice(stateIdx, 1);
    this.setState({list: stateList});
    const [sourceIdx, sourceList] = App.getIndex(JSON.parse(localStorage.getItem("list")), item);
    sourceList.splice(sourceIdx, 1)
    localStorage.setItem("list", JSON.stringify(sourceList));
  };

  handleOpenAddItem = () => {
    this.setState({isAddItem: true});
  };

  handleAddItem = item => {
    const list = [...this.state.list];
    list.push({name: item, checked: false});
    this.setState({list: list});
    const sourceList = [...JSON.parse(localStorage.getItem("list"))];
    sourceList.push({name: item, checked: false});
    localStorage.setItem("list", JSON.stringify(sourceList));
  };

  handleCloseDialog = () => {
    this.setState({isAddItem: false});
  };

  handleSearchItems = key => {
    const regex = new RegExp(`((^)(?<![а-я])|(?<=\\s))${key}`, "iu");
    const newList = localStorage.list ? [...JSON.parse(localStorage.list)] : [];
    const list = newList.filter((item => regex.test(item.name)));
    this.setState({list: list});
  };

  handleRemoveList = () => {
    this.setState({list: []});
    localStorage.removeItem("list");
  };

  render() {
    return (
      <>
      {this.state.isAddItem ? <AddItemDialog onAddItem={this.handleAddItem} onCloseDialog={this.handleCloseDialog}/> : null}
      <Search onTypeText={this.handleSearchItems} />
      <List list={this.state.list} onCheckItem={this.handleCheckItem} onDeleteItem={this.handleDeleteItem} />
      <section className="main__button-container">
        <Button name={"removeList"} handleClick={this.handleRemoveList} modifier="large" />
      <Button name={"plus"} handleClick={this.handleOpenAddItem} modifier="large" />
      </section>
      </>
    )
  };
};
