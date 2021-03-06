import { types } from "../types/types";

// {
//   id: new Date().getTime(),
//   title: "cumple Alexs",
//   start: moment().toDate(),
//   end: moment().add(2, "h").toDate(),
//   bgcolor: "#fafafa",
//   notes: "comprar el queque",
//   user: {
//     _id: "1234",
//     name: "Alexs",
//   },
// }

const initialState = {
  events: [],
  activeEvent: null,
};

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
      case types.eventSetActive:
          return {
              ...state,
              activeEvent: action.payload
          }
    case types.eventAddNew:
    return {
        ...state,
        events: [
            ...state.events,
            action.payload
        ]
    }

    case types.eventClearEventActive:
      return {
        ...state,
        activeEvent: null
      }

    case types.eventUpdated:
      return {
        ...state,
        events: state.events.map(
          e => (e.id === action.payload.id) ? action.payload : e
        )
      }

      case types.eventDeleted:
        return {
          ...state,
          events: state.events.filter(
            e => (e.id !== state.activeEvent.id)
          ),
          activeEvent: null
        }
      case types.eventLoaded:
        return {
          ...state,
          events: [...action.payload]
        }

    default:
      return state;
  }
};
