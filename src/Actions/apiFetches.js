export const getJobCategory = () => {
    return async (dispatch, getState) => {

    var response=await fetch(process.env.REACT_APP_URL + "companyApi/category", {
        method: "GET", 
    })
    
    if(response.ok)
    {
        var jobCategory = await response.json();
        jobCategory = jobCategory.categories.category        
    }
    
    dispatch({
        type: "JOB_CATEGORY",
        payload: jobCategory
      });
    }
    
}


export const getContractType = () => {
    return async (dispatch, getState) => {

    var response=await fetch(process.env.REACT_APP_URL + "companyApi/contract", {
        method: "GET", 
    })
    
    if(response.ok)
    {
        var contractType = await response.json();
        contractType = contractType.types.type
    }
    
    dispatch({
        type: "CONTRACT_TYPE",
        payload: contractType
      });
    }
    
}


//   export const getLocation = (location) => {
//     return async (dispatch, getState) => {
   
//       var response=await fetch(process.env.REACT_APP_URL + "companyApi/" + location, {
//       method: "GET", 
//     })

//     var selectedLocation = await response.json();
//     selectedLocation = selectedLocation;

//     dispatch({
//       type: "LOCATION",
//       payload: selectedLocation
//     });
//   }
// }

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
  
export const addJobApp=(application) => async dispatch =>{
  // console.log("hello", application)
  try {
       var res = await fetch(process.env.REACT_APP_URL + "application" , {
        method: "POST",
        body: JSON.stringify(application),
        headers: {
          "Content-Type": "application/json"
        }
      })
      if (res.ok) {
        var jobApp = await res.json();
      console.log("hello", jobApp)
    dispatch({
      type: "ADD_JOB_APP",
      payload: jobApp
    })
  }
  
  } catch (err) {
    console.log(err)
  }			
  }

  