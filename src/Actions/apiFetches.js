export const getSearch = (url) => {
  return async (dispatch, getState) => {
    var response = await fetch(process.env.REACT_APP_URL + "companyApi/" + url, {
      method: "GET",
    })

    var filteredSearch = await response.json();
    console.log(filteredSearch[0].description)

    dispatch({
      type: "FILTERED_SEARCH",
      payload: filteredSearch
    });
  }
}

export const getCompanyVacancies = (query) => {
  return async (dispatch, getState) => {
    var response = await fetch(process.env.REACT_APP_URL + "companyApi/" + query, {
      method: "GET",
    })

    var companyVacancies = await response.json();

    dispatch({
      type: "COMPANY_VACANCIES",
      payload: companyVacancies
    });
  }
}
