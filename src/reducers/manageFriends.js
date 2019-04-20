export function manageFriends(state, action){
  
  switch(action.type){
    case 'ADD_FRIEND' :
      return Object.assign({}, state, state.friends = [...state.friends, {name: action.friend.name, hometown: action.friend.hometown, id: action.friend.id }])
    default:state
    
  }
}
