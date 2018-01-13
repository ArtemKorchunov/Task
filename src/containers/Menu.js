import React, { Component } from 'react'
import { Link } from 'react-router'


class Menu extends Component {
    render() {
        return <div className="container">
        <nav id="nav" aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item active" aria-current="page">
                    <Link to="/">Users</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    <Link to="/calc">Calculate</Link>
                </li>
            </ol>
        </nav>
        {this.props.children}
        </div>

    }
}

export default Menu;