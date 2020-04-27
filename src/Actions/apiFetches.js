export const getSearch = (url, studentId) => {
  return async (dispatch, getState) => {
    var response = await fetch(process.env.REACT_APP_URL + "companyApi/" + url, {
      method: "GET",
    })

    var filteredSearch = await response.json();

    dispatch({
      type: "FILTERED_SEARCH",
      payload: filteredSearch.map(x => {
        return {
      companyName: x.company,
      companyLogo: x.company_logo,
      roleTitle: x.title,
      location: x.location,
      description: x.description,
      id: x.id,
      applyUrl: x.url,
      notes: [],
      tasks: [],
      studentId: studentId,
      }})
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


