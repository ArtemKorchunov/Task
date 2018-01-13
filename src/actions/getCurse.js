

export function getCurseEUR() {
    return (dispatch) => {
        dispatch({
            type: 'LOAD_CURSE'
        })
        fetch('http://api.fixer.io/latest?symbols=USD,RUB')
        .then( сurse => сurse.json())
        .then( json => dispatch({type: 'GET_CURSE', payload: json, fetching: true}))
    }
}

export function getCurseUSD() {
    return (dispatch) => {
        dispatch({
            type: 'LOAD_CURSE'
        })
        fetch('http://api.fixer.io/latest?base=usd')
        .then( сurse => сurse.json())
        .then( json => dispatch({type: 'GET_CURSE', payload: json,  fetching: false}))
    }
}