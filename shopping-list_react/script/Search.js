class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: ""};
  }

  handleChange = (ev) => {
    this.setState({value: ev.target.value});
    this.props.onTypeText(ev.target.value);
  }

  render(){
    return (
      <section className="search">
        <input className="search__input-field" type="text" placeholder="Искать..." value={this.state.value} onChange={this.handleChange} />
      </section>
    )
  }
}