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

export const setFact = (id) => {
  return async (dispatch) => {
    try{
      const { data } = await axios.get(`/api/facts/${id}`)
      dispatch(setSingleFact(data));
    }catch (err) {
      console.log(err)
    }
  }
}

//REDUCER
const initialState = [];

const factsReducer=(state = initialState, action) =>{
  switch (action.type) {
    case SET_FACTS:
      return action.facts
    case SET_FACT:
      return action.fact
    default:
      return state;
  }
}

export default factsReducer;