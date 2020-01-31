export default function(state={},action)
{
    switch(action.type)
    {
        case "REGISTRATION" : 
        return {
            ...state,
            userData: state.userData.concat(action.payload)            
          };
          default:
            return state;
    }
}