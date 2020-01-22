export default function(state = {}, action) {
    switch (action.type) {
      case "JOB_CATEGORY":
        console.log(action.payload)
        return {
          ...state,
          jobCategory: state.jobCategory.concat(action.payload)
          
        };
        case "CONTRACT_TYPE":
          console.log(action.payload)
          return {
            ...state,
            contractType: state.contractType.concat(action.payload)
            
          };
          case "ADD_JOB_APP":
            console.log(action.payload)
            return {
              ...state,
              jobApp: state.jobApp.concat(action.payload)
              
            };
          case "FILTERED_SEARCH":
            console.log(action.payload)
            return {
              ...state,
              filteredSearch: state.filteredSearch.concat(action.payload)
              
            };
      default:
        return state;
    }
  }