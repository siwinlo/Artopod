import axios from "axios";

const initialState = {
  userLocation: {},
  exhibitions: [],
  selected: []
};

// Action types
const GOT_EXHIBITIONS = "GOT_EXHIBITIONS";
const SELECT_EXHIBITION = "SELECTED_EXHIBITIONS";
const DESELECT_EXHIBITION = "DESELECT_EXHIBITION";

// Action creators
const gotExhibitions = exhibitions => ({
  type: GOT_EXHIBITIONS,
  exhibitions
});

const selectedExhibitions = exhibition => ({
  type: SELECT_EXHIBITION,
  exhibition
});

const selectedExhibitions = exhibition => ({
  type: SELECT_EXHIBITION,
  exhibition
});

// Thunk creators
export const getExhibitions = () => async dispatch => {
  const { data } = await axios.get("/api/");
  dispatch(gotExhibitions(data));
};

export const selectExhibitions = exhibition => async dispatch => {
  dispatch(selectedExhibitions(exhibition));
};

export const deselectExhibition = exhibition => async dispatch => {
  dispatch(deselectedExhibitions(exhibition));
};
// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_EXHIBITIONS: {
      return {
        exhibitions: action.exhibitions
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
        selected: state.selected.filter(exh => id !== action.exhibition.id)
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
