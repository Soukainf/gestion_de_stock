const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN": {
      return {
        //assign the login user to our curent user
        currentUser: action.payload,
      };
    }
    case "LOGOUT": {
      return {
        currentUser: null,
      };
    }
    default:
      return state;
  }
};

export default AuthReducer;
