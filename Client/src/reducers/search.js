const searchreducer = (state = [], action) => {
  switch (action.type) {
    case "search":
      return action.payload;
    default:
      return state;
  }
};
export default searchreducer;
