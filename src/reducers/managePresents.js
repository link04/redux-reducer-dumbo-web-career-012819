export function managePresents(state, action){
  
  switch(action.type){
    
    case 'INCREASE':
      let newState = state;
      newState.numberOfPresents + 1;
      return { ...state, state.numberOfPresents + 1};
    
    default:
      return state;
     
  }
  
}

