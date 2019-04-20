export function managePresents(state, action){
  
  switch(action.type){
    
    case 'INCREASE':
      let newState = state;
      newState.numberOfPresents++;
      return { ...state, state.numberOfPresents + 1};
    
    default:
      return state;
     
  }
  
}

