// import React, { useState, useEffect } from "react";
// import { Switch, Route, Redirect } from "react-router-dom";
// import App from "../../App";

// import Login from "../../components/Login/Login";
// import Logout from "../../components/Logout/Logout";
// import Manage from "../../pages/jsx/Manage";
// import Profile from "../../pages/jsx/Profile";
// import Axios from "axios";

// function PrivateRoute(props, user) {
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
//   console.log("after async", userAuth);
//   if (userAuth === "valid") {
//     console.log("auth success react");
//   }
//   const PrivateRoute = ({ component: Component, ...rest }) => {
//     return (
//       <Route
//         {...rest}
//         render={(props) => {
//           if (userAuth === "valid") {
//             return <Component {...props} />;
//           } else {
//             return (
//               <Redirect
//                 to={{
//                   pathname: "/admin",
//                   state: {
//                     from: props.location,
//                   },
//                 }}
//               />
//             );
//           }
//         }}
//       />
//     );
//   };
// }
// export default PrivateRoute;
// // const Router = (props) => (
// //   <Switch>
// //     <Route exact path="/login" component={Login} />
// //     <PrivateRoute path="/Manage" component={Manage} />
// //     <PrivateRoute path="/profile" component={Profile} />
// //     <PrivateRoute path="/logout" component={Logout} />
// //   </Switch>
// // );

// // const PrivateRoute = ({ component: Component, ...rest }, userRes) => (
// //   <Route
// //     {...rest}
// //     render={(props) =>
// //       userRes === "valid" ? (
// //         <Component {...props} />
// //       ) : (
// //         <Redirect
// //           to={{
// //             pathname: "/Admin",
// //           }}
// //         />
// //       )
// //     }
// //   />
// // );

// // export default Router;
