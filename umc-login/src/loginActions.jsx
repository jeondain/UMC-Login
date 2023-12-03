export const setUserId = (id) => ({
  type: "SET_USER_ID",
  payload: id,
});

export const setUserPassword = (pw) => ({
  type: "SET_USER_PASSWORD",
  payload: pw,
});

export const loginUser = () => ({
  type: "LOGIN_USER",
});
