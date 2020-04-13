export default function(state = {}, action) {
  switch (action.type) {
    case "SIGN_IN": 
    return {
     user: action.payload.user,
     token: action.payload.token,
  };
  case "USER_LOADED": 
    return {
      ...state,
		  isAuthenticated: action.payload.isAuthenticated,
		  loading: action.payload.loading,
  };
    default:
      return state;
  }
}
