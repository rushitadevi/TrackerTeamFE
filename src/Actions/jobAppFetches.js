export const addJobApp = (application) => async dispatch => {
  // console.log("hello", application)
  try {
    var res = await fetch(process.env.REACT_APP_URL + "application", {
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
    var response = await fetch(process.env.REACT_APP_URL + "application/app", {
      method: "GET",
    })

    var allJobApps = await response.json();

    dispatch({
      type: "GET_JOB_APPS",
      payload: allJobApps
    });
  }
}

// export const getSavedJobApps = (parameter) => {
//   return async (dispatch, getState) => {

//     if (parameter === "wishlist") {
//       var response = await fetch(process.env.REACT_APP_URL + "application/wishlist", {
//         method: "GET",
//       })
//       var wishlist = await response.json();
//       dispatch({
//         type: "WISHLIST",
//         payload: wishlist
//       });
//     }

//     if (parameter === "active") {
//       var response = await fetch(process.env.REACT_APP_URL + "application/active", {
//         method: "GET",
//       })
//       var active = await response.json();
//       dispatch({
//         type: "ACTIVE",
//         payload: active
//       });
//     }

//     if (parameter === "closed") {
//       var response = await fetch(process.env.REACT_APP_URL + "application/closed", {
//         method: "GET",
//       })
//       var active = await response.json();
//       dispatch({
//         type: "ACTIVE",
//         payload: active
//       });
//     }
//   }
// }

// export const getSavedJobAppsQuery = (parameter) => {
//   return async (dispatch, getState) => {
//     let query = "?limit=5";

//     if (parameter == "wishlist")
//       var response = await fetch(process.env.REACT_APP_URL + "application/wishlist" + query, {
//         method: "GET",
//       })

//     var wishlist = await response.json();
//     dispatch({
//       type: "WISHLIST",
//       payload: {
//         count: wishlistCount,
//         items: wishlist
//       }
//     });

//     if (parameter == "active")
//       var response = await fetch(process.env.REACT_APP_URL + "application/active" + query, {
//         method: "GET",
//       })

//     var active = await response.json();
//     dispatch({
//       type: "ACTIVE",
//       payload: {
//         count: activeCount,
//         items: active
//       }
//     });

//     if (parameter == "closed")
//       var response = await fetch(process.env.REACT_APP_URL + "application/closed" + query, {
//         method: "GET",
//       })

//     var active = await response.json();
//     dispatch({
//       type: "ACTIVE",
//       payload: {
//         count: closedCount,
//         items: closed
//       }
//     });
//   }

// }








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