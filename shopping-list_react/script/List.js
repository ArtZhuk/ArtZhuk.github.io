class List extends React.Component {
  static getIndex(array, item){
    const idx = array.findIndex(prod => prod.name === item.dataset.name);
    return [idx, array];
  }

  constructor(props){
    super(props);
    // this.state = {}
  }
  
  checkItemHandler = item => {
    const [idx, list] = List.getIndex(this.props.list, item);
    list[idx].checked = !list[idx].checked;
    this.props.onCheckItem(list)
  }

  deleteItemHandler = item => {
    const [idx, list] = List.getIndex(this.props.list, item);
    list.splice(idx, 1);
    this.props.onDeleteItem(list);
  }

  render() {
    const items = this.props.list.map(item => (
    <ListItem item={item} key={item.name} handleChange={this.checkItemHandler} handleDelete={this.deleteItemHandler}/>));

    
    return (
      <section className="main__list">
        <ul className="list">
          {items}
        </ul>
      </section>
    )
  }
}
