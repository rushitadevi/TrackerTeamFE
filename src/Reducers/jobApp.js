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
                case "ACTIVE":
                  console.log(action.payload)
                  return {
                    ...state,
                    active: state.active.concat(action.payload)                  
                  };
                  case "CLOSED":
                    console.log(action.payload)
                    return {
                      ...state,
                      closed: state.closed.concat(action.payload)                  
                    };
                    case "WISHLIST_COUNT":
                      return {
                        ...state,
                        wishlistCount: action.payload          
                      };
                      case "ACTIVE_COUNT":
                        return {
                          ...state,
                          activeCount: action.payload          
                        };
                        case "CLOSED_COUNT":
                          return {
                            ...state,
                            closedCount: action.payload          
                          };
      default:
        return state;
    }
  }