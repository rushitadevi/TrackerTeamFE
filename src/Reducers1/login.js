export default function(state={},action)
{
  console.log(action.type,"paylo")
    switch(action.type)
    {
        case "SIGN_IN" : 
        return {
            ...state,
            loggedInUser: state.loggedInUser.concat(action.payload)                       
           
          };
       
          default:
            return state;
    }
   }