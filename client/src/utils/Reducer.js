const Reducer = (state, action) => {
  switch (action.type) {
    case "USER_VALID":
      return {
        ...state,
        auth: action.payload,
      };
    case "USER_INVALID":
      return {
        ...state,
        auth: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        auth: "invalid",
        error: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
