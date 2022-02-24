import axios from "axios";

//ACTIONS
const SET_FACTS = "SET_FACTS";
const SET_FACT = "SET_FACT";
const ADD_FACT = "ADD_FACT"

//ACTION CREATORS
export const setFacts = (facts) => ({
  type: SET_FACTS,
  facts,
});

export const setSingleFact = (singleFact) =>({
  type: SET_FACT,
  singleFact
})

export const _addFact = (fact) =>({
  type: ADD_FACT,
  fact
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

export const addFact = (fact, history) =>{
  return async(dispatch) =>{
    const { data: added } = await axios.post('/api/facts', fact);
    dispatch(_addFact(added));
    history.push('/');
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
    case ADD_FACT:
      return [...state, action.fact]
    default:
      return state;
  }
}

export default factsReducer;