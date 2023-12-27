// src/redux/sidebarReducer.js
const initialState = {
    expanded: true,
  };
  
  const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE_SIDEBAR':
        return { ...state, expanded: !state.expanded };
      default:
        return state;
    }
  };
  
  export default sidebarReducer;
  