import axios from 'axios'

const SET_SINGLE_USER = 'SET_SINGLE_USER';
const UPDATE_USER = 'UPDATE_USER'

///
const setSingleUser = (user) => {
  return {
    type: SET_SINGLE_USER,
    user
  }
}

const updateUser = (user) =>{
  return {
    type: UPDATE_USER,
    user
  }
}

///
export const fetchSingleUser = (id) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`/api/users/${id}`)
      dispatch(setSingleUser(data))
    } catch (err) {
      console.log(err)
    }
  }
}

//add email:
export const userUpdate = (user, history) => async dispatch => {
  return async(dispatch)=>{
    const {data : updated} = await axios.put(`/api/users/${user.id}`)
    dispatch(updateUser(updated));
    history.push('/')
  }
}

const initialState = {}

 const singleUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SINGLE_USER:
      return action.user
    case UPDATE_USER:
      return state.map((user) =>
        user.id === action.user.id ? action.user : user
      );
    default:
      return state
  }
}

export default singleUserReducer;