export const StatusFilters = {
  All: "all",
  status: "active",
  completed: "completed",
};
const initialState = {
  status: StatusFilters.All,
  colors: [],
};

const filtersReducer = (state = initialState, action) => {
  switch (action.payload) {
    case "FILTERS_STATUS_FILTER_CHANGED": {
      return {
        ...state,
        filters: [
          ...state.filters,
          {
            status: action.payload,
          },
        ],
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
            colors: state.colors.concat(colors),
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
