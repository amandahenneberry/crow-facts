import axios from "axios";

//ACTIONS
const SET_DIS = "SET_DIS";

//ACTION CREATORS
export const setDIS = (discussions) => ({
  type: SET_DIS,
  discussions,
});


//THUNK CREATORS

export const fetchDis = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get("/api/discussions");
      dispatch(setDIS(data));
    } catch (err) {
      console.log(err);
    }
  };
};


//REDUCER
const initialState = [];

const disReducer=(state = initialState, action) =>{
  switch (action.type) {
    case SET_DIS:
      return action.discussions
    default:
      return state;
  }
}

export default disReducer;