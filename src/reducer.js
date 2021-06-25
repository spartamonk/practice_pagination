const reducer =(state,action)=> {
 if (action.type === 'FETCH_FOLLOWERS') {

  return {
    ...state,
    followers: action.payload
  }
 }

 if (action.type === 'SET_PAGE') {

  return {
   ...state,
   page: action.payload
  }
 }
 
 if (action.type === 'PREV_PAGE') {

  return {
   ...state,
   page: action.payload
  }
 } 
 if (action.type === 'NEXT_PAGE') {
  return {
   ...state,
   page: action.payload
  }
 } 
 throw new Error('no matching action type')
}

export default reducer