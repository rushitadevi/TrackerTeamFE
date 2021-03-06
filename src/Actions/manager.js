export const getApplications = () => {
  return async (dispatch, getState) => {
    var headers = new Headers({
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.token
    });

    var response = await fetch(process.env.REACT_APP_URL + "application/recentActivities", {
      method: "GET",
      headers: headers
    });
    var jSon = await response.json();
    dispatch({
      type: "GET_APPLICATIONS",
      payload: jSon
    });
  };
};

export const getStudents = () => {
  return async (dispatch, getState) => {
    var headers = new Headers({
      "Content-Type": "application/json"
    });
    var response = await fetch(process.env.REACT_APP_URL + "user", {
      method: "GET",
      headers: headers
    });
    var jSon = await response.json();
    dispatch({
      type: "GET_STUDENTS",
      payload: jSon
    });
  };
};

export const totAppsWeek = () => {
  var weekApps;
  return async (dispatch, getState) => {
    var response = await fetch(
      process.env.REACT_APP_URL + "application/AppsWeek",
      {
        method: "GET"
      }
    );
    console.log(response,"res")
    if (response.ok) {
      weekApps = await response.json();
      console.log(weekApps,"week")
      weekApps = weekApps.lastWeek
    }
    dispatch({
      type: "TOTAL_APP_WEEK",
      payload: weekApps
    });
  };
};

export const totApps = () => {
  return async (dispatch, getState) => {
    var res = await fetch(process.env.REACT_APP_URL + "application/totApp", {
      method: "GET"
      // headers: {
      //     "Authorization": "Bearer " + localStorage.token
      // },
    });
    if (res.ok) {
      var appCount = await res.json();
      console.log(appCount)
      // appCount = appCount
      dispatch({
        type: "TOTAL_APPS",
        payload: appCount
      });
    }
  };
};

export const updateStudentStatus = data => {
  console.log(data,"data")
  return async (dispatch, getState) => {
    var res = await fetch(process.env.REACT_APP_URL + "user/" + data._id, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        //"Authorization": "Bearer " + localStorage.token,
        "Content-Type": "application/json"
      }
    });
    if (res.ok) {
      var jSon = await res.json();
      dispatch({
        type: "UPDATE_STUDENT_STATUS",
        payload: jSon
      });
    }
  };
};

export const sendEmailToStudent = data => {
  return async (dispatch, getState) => {
    var res = await fetch(process.env.REACT_APP_URL + "user", {
      method: "POST",
                body: JSON.stringify(data),
                headers: {
                    //"Authorization": "Bearer " + localStorage.token,
                    "Content-Type": "application/json"
                }
    });
    if (res.ok) {
      var jSon = await res.json();
      dispatch({
        type: "SEND_EMAIL_STUDENT",
        payload: jSon
      });
    }
  };
};

