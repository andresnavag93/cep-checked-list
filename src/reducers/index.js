const reducer = (state, action) => {
  let elementsIndex;
  let newArray;
  switch (action.type) {
    case "SET_VISITED":
      elementsIndex = state.events.findIndex(
        (element) => element.id === action.payload.id
      );
      newArray = [...state.events];
      newArray[elementsIndex] = {
        ...newArray[elementsIndex],
        checked: "visto",
      };
      return {
        ...state,
        events: newArray,
        noVisited: state.noVisited - 1,
        visited: state.visited + 1,
      };

    case "SET_NOT_VISITED":
      elementsIndex = state.events.findIndex(
        (element) => element.id === action.payload.id
      );
      newArray = [...state.events];
      newArray[elementsIndex] = {
        ...newArray[elementsIndex],
        checked: "no visto",
      };
      return {
        ...state,
        events: newArray,
        noVisited: state.noVisited + 1,
        visited: state.visited - 1,
      };

    case "SET_FILTER_DATE":
      return {
        ...state,
        dates: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
