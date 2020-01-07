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