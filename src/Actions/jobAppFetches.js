export const addJobApp =(application) => async dispatch => {
  try {
    console.log(application)
    var res = await fetch(process.env.REACT_APP_URL + "application", {
      method: "POST",
      body: JSON.stringify(application),
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.token
      }
    });
    if (res.ok) {
      var jobApp = await res.json();
      dispatch({
        type: "ADD_JOB_APP",
        payload: jobApp
      });
      console.log(jobApp)
    }
  } catch (err) {
    console.log(err);
  }
};

export const updateJobApp = (application, id) => async dispatch => {
  try {
    var res = await fetch(process.env.REACT_APP_URL + "application/" + id, {
      method: "PUT",
      body: JSON.stringify(application),
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.token
      }
    });
    if (res.ok) {
      var jobAppUpdate = await res.json();

      dispatch({
        type: "UPDATE_JOB_APP",
        payload: jobAppUpdate
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const getJobApps = (token) => {
  return async (dispatch, getState) => {
  if(token){
    var response = await fetch(process.env.REACT_APP_URL + "application/app", {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + token
      }
    }
    )
  } else {
    var response = await fetch(process.env.REACT_APP_URL + "application/app", {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + localStorage.token
      }
    }
    )
  }

    
    // let first = curr.getDate() - curr.getDay() + i
    // let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
    // week.push(day)

    var allJobApps = await response.json();

    dispatch({
      type: "GET_JOB_APPS",
      payload: allJobApps
    });
  };
};

export const getSingleApp = id => {
  // console.log(query)
  return async (dispatch, getState) => {
    var response = await fetch(
      process.env.REACT_APP_URL + "application/" + id,
      {
        method: "GET"
      }
    );
    var singleApp = await response.json();

    dispatch({
      type: "SINGLE_APP",
      payload: singleApp
    });

    return singleApp;
  };
};

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
