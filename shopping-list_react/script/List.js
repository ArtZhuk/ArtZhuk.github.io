class List extends React.Component {
  constructor(props){
    super(props);
    // this.state = {}
  }
  
  checkItemHandler = item => {
    this.props.onCheckItem(item)
  }

  deleteItemHandler = item => {
    this.props.onDeleteItem(item);
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
