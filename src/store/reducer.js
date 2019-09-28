import axios from "axios";
import { distances } from "./distances";

const initialState = {
  location: {
    lat: 40.7485,
    lng: -73.9857
  },
  exhibitions: [],
  selected: []
};

// Action types
const GOT_EXHIBITIONS = "GOT_EXHIBITIONS";
const GOT_SELECTED = "GOT_SELECTED";
const SELECT_EXHIBITION = "SELECTED_EXHIBITIONS";
const DESELECT_EXHIBITION = "DESELECT_EXHIBITION";
const FAKE_SELECTED = "FAKE_SELECTED";
const SET_LOCATION = "SET_LOCATION";
const GET_DISTANCES = "GET_DISTANCES";
const SET_CLOSEST = "SET_CLOSEST";

// Action creators
const gotExhibitions = exhibitions => ({
  type: GOT_EXHIBITIONS,
  exhibitions
});

const gotSelected = selected => ({
  type: GOT_SELECTED,
  selected
});

const selectedExhibitions = exhibition => ({
  type: SELECT_EXHIBITION,
  exhibition
});

const deselectedExhibitions = exhibition => ({
  type: DESELECT_EXHIBITION,
  exhibition
});

export const fakeSelected = fake => ({
  type: FAKE_SELECTED,
  fake
});

export const setLocation = location => ({
  type: SET_LOCATION,
  location
});

// export const gotDistances = location => ({
//   type: GET_DISTANCES,
//   location
// });

const setTheClosest = location => ({
  type: SET_CLOSEST,
  location
});

// Thunk creators
export const getExhibitions = location => async dispatch => {
  console.log("FROM GET EXHIBITION", location);
  const { data } = await axios.get("/api/");
  const sortedData = data
    .map(exh => ({
      ...exh,
      distance: distances(
        [location.lat, location.longitude],
        [exh.lat, exh.longitude],
        true
      )
    }))
    .sort((a, b) => a.distance < b.distance);
  dispatch(gotExhibitions(sortedData));
};

export const getSelected = exhibitions => async dispatch => {
  dispatch(gotSelected(exhibitions));
};

export const selectExhibition = exhibition => async dispatch => {
  dispatch(selectedExhibitions(exhibition));
};

export const deselectExhibition = exhibition => async dispatch => {
  dispatch(deselectedExhibitions(exhibition));
};

export const setClosest = location => async dispatch => {
  // gotDistances(location);
  dispatch(setTheClosest(location));
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_EXHIBITIONS: {
      return { ...state, exhibitions: action.exhibitions };
    }
    case GOT_SELECTED: {
      return {
        ...state,
        selected: state.selected
      };
    }
    case SELECT_EXHIBITION: {
      return {
        ...state,
        selected: [...state.selected, action.exhibition]
      };
    }
    case DESELECT_EXHIBITION: {
      return {
        ...state,
        selected: state.selected.filter(exh => exh.id !== action.exhibition.id)
      };
    }
    case FAKE_SELECTED: {
      return {
        ...state,
        selected: state.exhibitions.slice(0, 5)
      };
    }
    case SET_LOCATION: {
      return { ...state, location: action.location };
    }
    case GET_DISTANCES: {
      return {
        ...state,
        exhibitions: state.exhibitions
          .map(
            exh =>
              (exh.distance = distances(
                [action.location.lat, action.location.longitude],
                [exh.lat, exh.longitude],
                true
              ))
          )
          .sort((a, b) => a.distance < b.distance)
      };
    }
    case SET_CLOSEST: {
      return {
        ...state,
        selected: [...state.selected, ...state.exhibitions.slice(0, 10)]
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
