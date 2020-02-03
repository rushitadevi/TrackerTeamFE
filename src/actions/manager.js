export const getApplications =()=> {
  console.log("hello")
    return async (dispatch, getState) => {
       var headers = new Headers({
        "Content-Type": "application/json"
      });
    
      var response = await fetch(
        process.env.REACT_APP_URL +  "application/app" ,
        {
          method: "GET",
          headers: headers
        }
      );
      var jSon = await response.json();
      console.log(jSon,"js")
      dispatch({
        type: "GET_APPLICATIONS",
        payload: jSon
      });
    };
  };

  export const getStudents = ()=> {
    console.log("hello")
    return async (dispatch, getState) => {
       var headers = new Headers({
        "Content-Type": "application/json"
      });
    
      var response = await fetch(
        process.env.REACT_APP_URL +  "user" ,
        {
          method: "GET",
          headers: headers
        }
      );
      var jSon = await response.json();
      console.log(jSon,"students")
      dispatch({
        type: "GET_STUDENTS",
        payload: jSon
      });
    };
  };


  export const totAppsWeek=()=>{
    var weekApps
    return async (dispatch, getState) => {
      var response = await fetch(
        process.env.REACT_APP_URL + "application/AppsWeek" ,
       {
         method: "GET"
       }
     );
     if (response.ok) {
      weekApps = await response.json();
      console.log(weekApps.lastWeek,"week")
      //weekApps = weekApps.lastWeek
       }
     dispatch({
       type: "TOTAL_APP_WEEK",
       payload: weekApps.lastWeek
     });
      }
    }

    export const totApps=()=>{
      return async(dispatch,getState)=>{
          var res = await fetch(process.env.REACT_APP_URL +  "application/totApp", {
              method: "GET",
              // headers: {
              //     "Authorization": "Bearer " + localStorage.token
              // },
          })
          if (res.ok) {
              var appCount = await res.json();
              appCount = appCount.totApp
              dispatch({
                type: "TOTAL_APPS",
                payload: appCount.totApp
              });
          }
      
      }
    }