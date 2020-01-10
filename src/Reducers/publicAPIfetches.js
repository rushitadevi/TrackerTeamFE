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
          // case "LOCATION":
          //   console.log(action.payload)
          //   return {
          //     ...state,
          //     selectedLocation: state.selectedLocation.concat(action.payload)
              
          //   };
          case "GET_GRADE":
            console.log(action.payload)
            return {
              ...state,
              selectedGrade: state.selectedGrade.concat(action.payload)
              
            };
      default:
        return state;
    }
  }