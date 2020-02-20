export default function(state = {}, action) {
  switch (action.type) {
    case "SIGN_IN": 
    return {
     user: action.payload.user,
     token: action.payload.token,
  };
    default:
      return state;
  }
}
