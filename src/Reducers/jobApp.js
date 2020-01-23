export default function(state = {}, action) {
    switch (action.type) {
          case "ADD_JOB_APP":
            console.log(action.payload)
            return {
              ...state,
              jobApp: state.jobApp.concat(action.payload)
              
            };
            case "GET_JOB_APPS":
              console.log(action.payload)
              return {
                ...state,
                allJobApps: state.allJobApps.concat(action.payload)
                
              };
              case "WISHLIST":
                console.log(action.payload)
                return {
                  ...state,
                  wishlist: state.wishlist.concat(action.payload)                  
                };
    
      default:
        return state;
    }
  }