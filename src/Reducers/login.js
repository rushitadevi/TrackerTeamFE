export default function(state={},action)
{
  console.log(action.type,"paylo")
    switch(action.type)
    {
        case "SIGNIN" : 
        return {
            ...state,
            loggedInUser: state.loggedInUser.concat(action.payload)                       
          };
          default:
            return state;
    }
   }