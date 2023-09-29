export function AppReducer(state, action) {
  switch (action.type) {
    case "FETCH_SUCC":
      return {
        loading: false,
        data: action.payload,
        err: "",
      };

    case "FETCH_ERR":
      return {
        loading: false,
        data: [],
        err: action.payload,
      };
    default:
      return state;
  }
}
