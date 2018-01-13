import React, { Component } from 'react'

export default class Table extends Component {
  constructor(props){
    super(props)
    
    let { EURInRUB, EURInUSD, USDInEUR, USDInRUB } = this.props.curses;
    this.state = {
      Euro: {Rubl: EURInRUB, Dollar: EURInUSD, value: 0},
      Dollar: {Euro: USDInEUR, Rubl: USDInRUB, value: 0},
      Rubl: {Euro: (1/EURInRUB).toFixed(3), Dollar: (1/USDInRUB).toFixed(3), value: 0}
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.count_requests >= 2){
      let curses = nextProps.curses;
      let { EURInRUB, EURInUSD, USDInEUR, USDInRUB } = curses;
      this.setState({
        Euro: {Rubl: EURInRUB, Dollar: EURInUSD, value: 0},
        Dollar: {Euro: USDInEUR, Rubl: USDInRUB, value: 0},
        Rubl: {'Euro': (1/EURInRUB).toFixed(3), 'Dollar': (1/USDInRUB).toFixed(3)}
      })
    } 
  }
  convertValut(e){
    this.setState()
    let this_input = e.target;
    let form = this_input.form;
    let name = this_input.name;
    let currence = this.state[name];
    let objects = {}
    let input_name, cur_currency;
    objects[name] = currence;
    currence.value = this_input.value;
    for (let input of form){
      input_name = input.name;
      if (name != input_name){
       cur_currency = this.state[input_name];
       cur_currency.value = (currence[input_name] * currence.value).toFixed(3);
       objects[input_name] = cur_currency;
      }
    }
    this.setState(objects);    
  }
  render() {
    return (
    <form>
      <div className="form-row">
        <div className="form-group col-md-4">
          <label htmlFor="inputPassword4">Rubl &#8381;</label>
            <input onChange={this.convertValut.bind(this)} value={this.state.Rubl.value} type="number" name="Rubl" className="form-control" placeholder="Rubl" aria-describedby="basic-addon1"/>             
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="inputPassword4">Euro &#8364;</label>
          <input onChange={this.convertValut.bind(this)} value={this.state.Euro.value} type="number" name="Euro" className="form-control" placeholder="Euro" aria-describedby="basic-addon2"/>
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="inputPassword4">Dollar &#36;</label>
          <input onChange={this.convertValut.bind(this)} value={this.state.Dollar.value} type="number" name="Dollar" className="form-control" placeholder="Dollar" aria-describedby="basic-addon3"/>
        </div>
      </div>
    </form>
    )
  }
}