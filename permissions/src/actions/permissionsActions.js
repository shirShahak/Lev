const togglePermission = permissionName=>{
return{
    type: 'TOGGLE_PERMISSION',
    payload : permissionName
}
} 

const toggleCategory = categoryName=>{
    return{
        type: 'TOGGLE_CATEGORY',
        payload : categoryName
    }
} 

const getData = categoryName=>{
    return{
        type: 'GET_DATA',
        payload : {
            "מוצרי חלב": {
              גבינה: false,
              חלב: false,
              קוטג: false,
              שוקו: false,
              יוגורט: false,
            },
            ירקות: {
              מלפפון: false,
              עגבניה: false,
              גזר: false,
            },
            "לחמים ומאפים": {
              לחמניות: false,
              פיתות: false,
              חלות: false,
              לחמים: false,
            },
            "בשר, עוף ודגים": {
              "עוף טחון": false,
              "בשר טחון": false,
              "חזה עוף": false,
              דג: false,
            },
          }
    }
} 