import React, { Component } from 'react'

export default class Table extends Component {
  deleteRow(e) {
   this.props.delUser(e.target.id.split('_')[1])
  }

  addRow(e) {
    e.preventDefault();
    let form = e.target;
    let new_user = {};
    let input;
    for (let val in form){
      input = form[val];
      if (input.localName === 'button') break
      new_user[input.name] = input.value;
    }
    this.props.addUser(new_user);
  }

  headRender (fetching, heads) {
    return heads.map((value,i) => {
      return (
        <th key={'th' + i}>{value}</th>
      )
    })
  }

  rowRender (fetching, users) {
    let tmp;
    return users.map((user, i) => {
      tmp = Object.keys(user).map((value, j) => {
        return (
          <td key={"td-" + i + "-" + j}>{user[value] }</td>
        )
      })
      return (
        <tr key={'tr' + i}>
          <td> <button className="btn-sm btn-danger" id={"btn_"+ user.id} type="button" onClick={this.deleteRow.bind(this)}>Delete</button></td>
          {tmp}
        </tr>
      )
    })
  }

  ifEmpty(sent, users) {
    return (sent && !users.length && <div className="alert alert-warning" role="alert">
      <strong>Warning!</strong> There are no users.
    </div>)
  }

  formRender() {
    return (
      <form onSubmit={this.addRow.bind(this)}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">id</label>
            <input type="text" name='id' className="form-control" placeholder="id"/>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">name</label>
            <input type="name" name='name' className="form-control" placeholder="name"/>
          </div>
        </div>
        <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword4">username</label>
              <input type="text" name='username' className="form-control" placeholder="username" />
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">city</label>
                <input type="text" name='city' className="form-control" placeholder="city"/>
            </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
              <label htmlFor="inputPassword4">phone</label>
              <input type="text" name='phone' className="form-control" placeholder="phone"/>
          </div>
          <div className="form-group col-md-6">
              <label htmlFor="inputPassword4">age</label>
              <input type="number" name='age' className="form-control" placeholder="age"/>
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Add</button>
        </div>
      </form>
    )
  }

  render() {
    let { users, fetching, user_props } = this.props;
    let sent = typeof fetching !== "object" && !fetching;
    return (
      (sent &&
        <div>
          {this.formRender()}
          <table className="table table-dark">
            <thead>
              <tr>
                <th> </th>
                { this.headRender(fetching, user_props)}
              </tr>
            </thead>
            <tbody>
              { this.rowRender(fetching, users) }
            </tbody>
          </table>
          { this.ifEmpty(sent, users)}
        </div>
      ) 
    )
  }
}
