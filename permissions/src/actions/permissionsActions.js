export const sendPermissionsRequest = (userDetails) => {
    return {
      type: "SEND_PERMISSIONS",
      payload: {userDetails}
    };
  };

export const togglePermission = (currPermissions, categoryName, target) => {
  return {
    type: "TOGGLE_PERMISSION",
    payload: {
      [categoryName]: {
        ...currPermissions,
        [target.name]: target.checked
      }
    }
  };
};

// toggle all in category
export const toggleCategory = (currCategoryPermissions, target) => {
  const permissions = {};

  Object.keys(currCategoryPermissions).forEach((key) => {
    permissions[key] = target.checked;
  });

  return {
    type: "TOGGLE_CATEGORY",
    payload: {
      [target.name]: { ...permissions }
    }
  };
};

export const getPermissions = () => {
  return {
    type: "GET_PERMISSIONS",
    payload: {
      "מוצרי חלב": {
        גבינה: false,
        חלב: false,
        קוטג: false,
        שוקו: false,
        יוגורט: false
      },
      ירקות: {
        מלפפון: false,
        עגבניה: false,
        גזר: false
      },
      "לחמים ומאפים": {
        לחמניות: false,
        פיתות: false,
        חלות: false,
        לחמים: false
      },
      "בשר, עוף ודגים": {
        "עוף טחון": false,
        "בשר טחון": false,
        "חזה עוף": false,
        דג: false
      }
    }
  };
};
