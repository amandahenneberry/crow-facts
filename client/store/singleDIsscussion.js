import axios from 'axios'

const SET_SINGLE_DISCUSSION = 'SET_SINGLE_DISCUSSION'

const setSingleDiscussion = (discussion) => {
  return {
    type: SET_SINGLE_DISCUSSION,
    discussion
  }
}

export const fetchSingleDiscussion = (id) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`/api/discussions/${id}`)
      dispatch(setSingleDiscussion(data))
    } catch (err) {
      console.log(err)
    }
  }
}

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SINGLE_DISCUSSION:
      return action.discussion
    default:
      return state
  }
}