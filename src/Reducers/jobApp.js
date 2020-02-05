export default function(state = {}, action) {
    switch (action.type) {
          case "ADD_JOB_APP":
            console.log(action.payload)
            return {
              ...state,
              jobApp: state.jobApp.concat(action.payload)
              
            };
            case "GET_JOB_APPS":
              return {
                ...state,
                allJobApps: action.payload,
                wishlist: { items: action.payload.filter(x => x.status === "wishlist"), count: action.payload.filter(x => x.status === "wishlist").length},
                closed:{ items: action.payload.filter(x => x.status === "application withdrawn" || x.status === "rejected"), count: action.payload.filter(x => x.status === "application withdrawn" || x.status === "rejected").length},
                active: { items: action.payload.filter(x => x.status === "interview"|| x.status === "applied" || x.status === "offer"), count: action.payload.filter(x => x.status === x.status === "interview"|| x.status === "applied" || x.status === "offer").length},
              };
            case "SINGLE_APP":
              return {
                ...state,
                singleApp: action.payload                
              };             
                   
      default:
        return state;
    }
  }