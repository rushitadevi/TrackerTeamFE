export default function(state = {}, action) {
    switch (action.type) {
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