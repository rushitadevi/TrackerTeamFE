export const getSearch = (url) => {
  return async (dispatch, getState) => {
    var response=await fetch(process.env.REACT_APP_URL + "companyApi/" + url, {
    method: "GET", 
  })

  var filteredSearch = await response.json();
 

  dispatch({
    type: "FILTERED_SEARCH",
    payload: filteredSearch
  });
}
}

