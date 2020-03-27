export const addRegisterData = data => async dispatch => {
  try {
    console.log(data,"register")
    var res = await fetch(process.env.REACT_APP_URL + 'user/register', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (res.ok) {
      var registeredData = await res.json();
      console.log(registeredData,"registerinside")
    dispatch({
      type: "REGISTRATION",
      payload: registeredData
    });
  }
  } catch (err) {}
};
