// Login
export const login = (trueFalse) => ({
  type: 'LOGIN',
  trueFalse: trueFalse,
});

export const userLogin = (data) => {
  return {
      type: 'USER_LOGIN',
      data
  }
}

export const userLogout = () => {
  return {
      type: 'USER_LOGOUT'
  }
}