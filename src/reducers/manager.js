export default function(state = {}, action) {
    switch (action.type) {
       case "GET_APPLICATIONS":
        return {
          ...state,
          applications: action.payload
        };
        case "GET_STUDENTS":
        return {
            ...state,
            students : action.payload
        };
        case "TOTAL_APP_WEEK":
         return  {
            // ...state,
           weekapps : action.weekapps
          };
        case "TOTAL_APPS":
            return  {
              
               appCount : action.payload
             };
       default:
        return state;
    }
  }
  