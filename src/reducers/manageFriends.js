export function manageFriends(state, action){
  
  let stateCopy = {...state };
  switch(action.type){
    case 'ADD_FRIEND':
      stateCopy.friends.push({name: action.friend.name, hometown: action.friend.hometown})
      return stateCopy;
   case 'REMOVE_FRIEND':
    const result = stateCopy.friends.filter(friend => 
      friend.id === action.id
     )
    stateCopy.friends = result;
      return stateCopy;
  
    default:
      return state
  }
}
