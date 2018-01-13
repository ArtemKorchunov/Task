import {
    GET_CURSE,
    LOAD_CURSE
  } from '../constants/Page'
  
  const initialState = {
      cur_curses: {
        USDInEUR: 1,
        USDInRUB: 1,
        RUBInEUR: 1,
        RUBInUSD: 1,
        EURInRUB: 1,
        EURInUSD: 1
      },
      fetching: false,
      count_requests: 0
  }
  
  export default function users(state = initialState, action) {
    
    switch (action.type) {
      case GET_CURSE:
        return {
          ...state,
          count_requests: ++state.count_requests,
          cur_curses: {...state.cur_curses, ...makeProps(action.payload)},
        }
      case LOAD_CURSE:
        return {
          ...state, fetching: true
        }
      default:
        return state;
    }
  
  }

  function makeProps(payload){
    let obj = {}
    let rates = payload.rates;
    let val_upper;
    for (let val in rates){
      val_upper = val;
      if (val_upper == "USD" || val_upper == "RUB" || val_upper == "EUR"){
        obj[payload.base + 'In' + val] = rates[val]; 
      }
    }
    return obj;
  }