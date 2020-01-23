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

    export const getJobApps = () => {
        return async (dispatch, getState) => {
          var response=await fetch(process.env.REACT_APP_URL + "application/app", {
          method: "GET", 
        })
      
        var allJobApps = await response.json();

        dispatch({
          type: "GET_JOB_APPS",
          payload: allJobApps
        });
      }
      }

      export const getWishlistJobApps = () => {
        return async (dispatch, getState) => {
          var response=await fetch(process.env.REACT_APP_URL + "application/wishlist", {
          method: "GET", 
        })
      
        var wishlist = await response.json();

        dispatch({
          type: "WISHLIST",
          payload: wishlist
        });
      }
      }