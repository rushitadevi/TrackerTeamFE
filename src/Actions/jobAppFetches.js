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

    export const updateJobApp=(application,id) => async dispatch =>{
       console.log("hellolplp", application,id)
      try {
           var res = await fetch(process.env.REACT_APP_URL + "application/"+ id , {
            method: "PUT",
            body: JSON.stringify(application),
            headers: {
              "Content-Type": "application/json"
            }
          })
          if (res.ok) {
            var jobApp = await res.json();
          console.log("helloppp", jobApp)
        dispatch({
          type: "UPDATE_JOB_APP",
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

      export const getWishlistJobApps = (query) => {
        return async (dispatch, getState) => {
          var response=await fetch(process.env.REACT_APP_URL + "application/wishlist" + query, {
          method: "GET", 
        })
      
        var wishlist = await response.json();

        dispatch({
          type: "WISHLIST",
          payload: wishlist
        });
      }
      }

      export const getWishlistCount = () => {
        return async (dispatch, getState) => {
          var response=await fetch(process.env.REACT_APP_URL + "application/wishlistCount", {
          method: "GET", 
        })
      
        var wishlistCount = await response.json();

        dispatch({
          type: "WISHLIST_COUNT",
          payload: wishlistCount
        });
      }
      }

      export const getActiveJobApps = (query) => {
        // console.log(query)
        return async (dispatch, getState) => {
          var response=await fetch(process.env.REACT_APP_URL + "application/active" + query, {
          method: "GET", 
        })
        var active = await response.json();

        dispatch({
          type: "ACTIVE",
          payload: active
        });
      }
      }

      export const getClosedJobApps = (query) => {
        // console.log(query)
        return async (dispatch, getState) => {
          var response=await fetch(process.env.REACT_APP_URL + "application/closed" + query, {
          method: "GET", 
        })
        var closed = await response.json();

        dispatch({
          type: "CLOSED",
          payload: closed
        });
      }
      }

      // export const getSingleApp = (id) => {
      //   // console.log(query)
      //   return async (dispatch, getState) => {
      //     var response=await fetch(process.env.REACT_APP_URL + "application/" + id, {
      //     method: "GET", 
      //   })
      //   var application = await response.json();

      //   dispatch({
      //     type: "APPLICATION",
      //     payload: application
      //   });
      // }
      // }