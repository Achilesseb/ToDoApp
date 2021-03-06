export const StatusFilters = {
  All: "all",
  Active: "active",
  Completed: "completed",
};
const initialState = {
  colors: [],
  status: StatusFilters.All,
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILTERS_STATUS_FILTER_CHANGED": {
      return {
        ...state,
        status: action.payload,
      };
    }

    case "FITLERS_COLOR_FILTER_CHANGED": {
      let { color, changeType } = action.payload;
      const { colors } = state;
      switch (changeType) {
        case "ADDED": {
          if (colors.includes(color)) {
            return state;
          }
          return {
            ...state,
            colors: state.colors.concat(color),
          };
        }
        case "REMOVED": {
          return {
            ...state,
            colors: state.colors.filter(
              (existingColor) => existingColor !== color
            ),
          };
        }
        default:
          return state;
      }
    }
    default:
      return state;
  }
};

export default filtersReducer;
