import {
    GET_USERS,
    LOAD_USERS,
    ADD_USER,
    DEL_USER
  } from '../constants/Page'
  
const initialState = {
    users: [],
    fetching: null,
    props: ['id','name','username', 'city', 'phone', 'age']
}

export default function users(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload, fetching: false }
    case LOAD_USERS:
      return { ...state, fetching: true }
    case ADD_USER: 
      return {...state, users: [...state.users, action.payload]}
    case DEL_USER:
      return {...state, users: del_user(state.users, action.payload)}
    default:
      return state;
  }

}

function del_user(users, del_id) {
  let count = 0;
  for (let val of users){
    if(val.id == del_id) break;
    count++;
  }
  users.splice(count,1);
  return [...users]
}