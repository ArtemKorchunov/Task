import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter} from 'react-router'

import getUsers from '../actions/getUsers'
import addUser from '../actions/addUser'
import delUser from '../actions/delUser'

import Table from '../components/Table'

class Users extends Component {
    componentDidMount() {
        this.props.getUsers();
    }
    render() {
        let { users, fetching, user_props, addUser, delUser } = this.props;
        return <div className='form'>
            <Table users={users} fetching={fetching} user_props={user_props} addUser={addUser} delUser={delUser}/>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        users: state.users.users,
        fetching : state.users.fetching,
        user_props: state.users.props
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getUsers: bindActionCreators(getUsers, dispatch),
        addUser: bindActionCreators(addUser, dispatch),
        delUser: bindActionCreators(delUser, dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Users))