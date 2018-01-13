

export default function getUsers() {
    return (dispatch) => {
        dispatch({
            type: 'LOAD_USERS'
        })
        fetch('http://www.mocky.io/v2/5a5a20262e00002c1471fb1a')
        .then(users => users.json())
        .then(json => dispatch({type: 'GET_USERS', payload: json}))
    }
    
}