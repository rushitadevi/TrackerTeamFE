export default function(state={},action)
{
    switch(action.type)
    {
        case "REGISTRATION" : 
        return {
            ...state,
            user: state.user.concat(action.payload)            
          };
          default:
            return state;
    }
}