// import React, { useState, component, useEffect } from "react";

// import Axios from "axios";

// function Auth(props, user) {
//   const [userAuth, setUserAuth] = useState({});

//   useEffect(() => {
//     checkAuth();
//   }, []);

//   const checkAuth = (props, user) => {
//     const userObj = JSON.stringify(localStorage.getItem("user"));
//     console.log("userObj", userObj);
//     let userRes;
//     Axios({
//       method: "POST",
//       data: {
//         user: userObj,
//       },
//       url: "/auth",
//     })
//       .then((response) => {
//         console.log("res react", response.data);
//         if (response.data === "valid") {
//           let userRes = "valid";

//           console.log("userRes1", userRes);
//           return userRes;
//         } else {
//           let userRes = "invalid";
//           return userRes;
//         }
//       })
//       .then((userRes) => {
//         setUserAuth(userRes);
//       });
//   };
// }
// export default Auth();
