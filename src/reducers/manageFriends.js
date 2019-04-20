export function manageFriends(state, action){
  
  switch(action.type){
    
    case 'ADD_FRIEND' :
      let stateCopy = {...state };
      stateCopy.friends.push(
        {name: action.friend.name, hometown: action.friend.hometown, id: action.friend.id }
        )
      return stateCopy;
      break;
   case 'REMOVE_FRIEND' :
      let stateCopy = {...state };
      stateCopy.friends.filter(friend => 
        friend.id === action.id
      )
      return stateCopy;
      break;
    default:
      return state
    
  }
}
