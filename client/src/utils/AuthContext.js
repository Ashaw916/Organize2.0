// import React, { useState } from "react";

// const State = { auth: "invalid" };

// export const AuthContext = React.createContext(State);
// export default ({ children }) => {
//   const [userAuthState, setUserAuthState] = useState(State);
//   return (
//     <AuthContext.Provider value={[userAuthState, setUserAuthState]}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

import React from "react";

const AuthContext = React.createContext({
  userAuth: "Invalid",
});

export default AuthContext;
