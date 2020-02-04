export default function(state = {}, action) {
    switch (action.type) {
          case "FILTERED_SEARCH":
            return {
              ...state,
              filteredSearch: action.payload
              
            }
            case "COMPANY_VACANCIES":
              return {
                ...state,
                companyVacancies: action.payload
                
              };
      default:
        return state;
    }
  }