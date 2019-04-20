export function manageFriends(state, action){
  switch(action.type){
  
   case 'REMOVE_FRIEND' :
      let stateCopy = {...state };
      return stateCopy;
  
    default:
      return state
  }
}
