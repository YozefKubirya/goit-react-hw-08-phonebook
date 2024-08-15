export const getUser = state=> state.auth.user;
export const getLoggedIn = state=> state.auth.isLoggedIn;
export const getRefreshing =  state=> state.auth.isRefreshing;