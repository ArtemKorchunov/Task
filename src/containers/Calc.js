import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { withRouter} from 'react-router'
import { getCurseEUR, getCurseUSD } from '../actions/getCurse'
import Calculate from '../components/Calculate'

class Calc extends Component {
  componentDidMount() {
    this.props.getCurseEUR();
    this.props.getCurseUSD();
    
  }
  render() {
    let { curses, count_requests } = this.props;
      return <div className='form'>
        <Calculate curses={curses} count_requests={count_requests}/>
      </div>
  }
}

function mapStateToProps(state) {
  return {
    curses: state.curse.cur_curses,
    count_requests: state.curse.count_requests
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCurseEUR: bindActionCreators(getCurseEUR, dispatch),
    getCurseUSD: bindActionCreators(getCurseUSD, dispatch)
  }
}

export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(Calc))