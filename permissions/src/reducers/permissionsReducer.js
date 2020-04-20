export const permissionsReducer = (permissions = null, action) => {
  if (action.type === "GET_PERMISSIONS") return action.payload;
  else if (action.type === "TOGGLE_CATEGORY") return {...permissions, ...(action.payload)};
  else if (action.type === "TOGGLE_PERMISSION") return {...permissions, ...(action.payload)};

  return permissions;
};
