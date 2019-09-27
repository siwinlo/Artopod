import axios from "axios";

const initialState = {
  location: {},
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

// Thunk creators
export const getExhibitions = () => async dispatch => {
  const { data } = await axios.get("/api/");
  dispatch(gotExhibitions(data));
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
    default: {
      return state;
    }
  }
};

export default reducer;
