export const permissionsReducer = (permissions = null, action) => {
  if (action.type === "GET_DATA") return action.payload;

  return null;
};
