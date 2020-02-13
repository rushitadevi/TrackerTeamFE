export const addLoginData = data => async dispatch => {
  try {
    var res = await fetch(process.env.REACT_APP_URL + "user/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (res.ok) {
      var loggedInData = await res.json();
      dispatch({
        type: "SIGN_IN",
        payload: loggedInData
      });
    }
  } catch (err) {}
};

