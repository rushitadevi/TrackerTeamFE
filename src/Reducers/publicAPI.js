export default function(state = {}, action) {
    switch (action.type) {
          case "FILTERED_SEARCH":
            console.log(action.payload)
            return {
              ...state,
              filteredSearch: state.filteredSearch.concat(action.payload)
              
            }
            case "COMPANY_VACANCIES":
              console.log(action.payload)
              return {
                ...state,
                companyVacancies: state.companyVacancies.concat(action.payload)
                
              };
      default:
        return state;
    }
  }