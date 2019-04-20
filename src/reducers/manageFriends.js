export function manageFriends(state, action){
  
  switch(action.type){
    case 'ADD_FRIEND' :
      let stateCopy = {
        ...state
      };
      stateCopy.friends = {
        ...stateCopy.friends
        ,
      }
      return 
    default:state
    
  }
}
