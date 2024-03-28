class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {list: props.itemsToBuy, isAddItem: false}
  };

  handleCheckItem = list => {
    this.setState({list: list});
    localStorage.setItem("list", JSON.stringify(list));
  };

  handleDeleteItem = list => {
    this.setState({list: list});
    localStorage.setItem("list", JSON.stringify(list));
  };

  handleOpenAddItem = () => {
    this.setState({isAddItem: true});
  };

  handleAddItem = item => {
    const list = [...this.state.list];
    list.push({name: item, checked: false});
    this.setState({list: list});
    localStorage.setItem("list", JSON.stringify(list));
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
