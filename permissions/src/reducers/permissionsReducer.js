const initialState = { permissions: null, userDetails: null };

export const permissionsReducer = (
  permissionsDetails = initialState,
  action
) => {
  if (action.type === "GET_PERMISSIONS")
    return {
      ...permissionsDetails,
      permissions: action.payload
    };
  else if (action.type === "TOGGLE_CATEGORY")
    return {
      ...permissionsDetails,
      permissions: { ...permissionsDetails.permissions, ...action.payload }
    };
  else if (action.type === "TOGGLE_PERMISSION")
    return {
      ...permissionsDetails,
      permissions: { ...permissionsDetails.permissions, ...action.payload }
    };
  else if (action.type === "SEND_PERMISSIONS") return action.payload;

  // else if (action.type === "SEND_PERMISSIONS")
  //   return { ...permissionsDetails, userDetails: { ...action.payload } };

  return permissionsDetails;
};
