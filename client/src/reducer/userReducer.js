const INITIAL_STATE = {
  isLoading: false,
  logError: [],
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "ERROR":
      return {
        ...state,
        logError: action.payload,
      };

    default:
      return state;
  }
};
