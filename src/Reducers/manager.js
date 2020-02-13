export default function(state = {}, action) {
  switch (action.type) {
    case "GET_APPLICATIONS":
      return {
        ...state,
        applications: action.payload
      };
    case "GET_STUDENTS":
      return {
        ...state,
        students: action.payload
      };
    case "TOTAL_APP_WEEK":
      return {
        ...state,
        weekapps: action.payload
      };
    case "TOTAL_APPS":
      return {
        ...state,
        appCount: action.payload
      };
    case "UPDATE_STUDENT_STATUS":
      return {
        ...state,
        studentStatus: action.payload
      };
    case "SEND_EMAIL_STUDENT":
      return {
        ...state,
        sendEmail: true
      };
    default:
      return state;
  }
}
