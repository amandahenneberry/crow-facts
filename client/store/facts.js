import axios from "axios";

//ACTIONS
const SET_FACTS = "SET_FACTS";
const SET_FACT = "SET_FACT";

//ACTION CREATORS
export const setFacts = (facts) => ({
  type: SET_FACTS,
  facts,
});

export const setSingleFact = (singleFact) =>({
  type: SET_FACT,
  singleFact
})

//THUNK CREATORS

export const fetchFacts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/facts");
      dispatch(setFacts(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const setFact = (fact) => {
  return async (dispatch) => {
    try{
      const { data: singleFact } = await axios.get(`/api/facts/${fact.id}`)
      dispatch(setSingleFact(singleFact));
    }catch (err) {
      console.log(err)
    }
  }
}

//REDUCER
const initialState = {
    facts:[]
};

export default function factsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FACTS:
      return {...state, facts: action.facts};
    case SET_FACT:
      return action.facts
    default:
      return state;
  }
}