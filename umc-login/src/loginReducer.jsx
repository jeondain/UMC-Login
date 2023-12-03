const initialState = {
  id: "",
  pw: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_ID":
      return {
        ...state,
        id: action.payload,
      };
    case "SET_USER_PASSWORD":
      return {
        ...state,
        pw: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
