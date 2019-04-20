export function manageFriends(state, action){
  
  let stateCopy = {...state };
  switch(action.type){
    case 'ADD_FRIEND':
      stateCopy.friends.push({name: action.friend.name, hometown: action.friend.hometown, id: action.friend.id })
      return stateCopy;
   case 'REMOVE_FRIEND':
    stateCopy.friends = stateCopy.friends.filter(friend => 
      friend.id === action.id
     )
   
      return stateCopy;
  
    default:
      return state
  }
}
