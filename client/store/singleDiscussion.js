import axios from 'axios'

const SET_SINGLE_DISCUSSION = 'SET_SINGLE_DISCUSSION'
const ADD_COMMENT = 'ADD_COMMENT'
///

const setSingleDiscussion = (discussion) => {
  return {
    type: SET_SINGLE_DISCUSSION,
    discussion
  }
}

const _addComment = (comment) =>{
  return{
    type: ADD_COMMENT,
    comment
  }
}
///

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

export const addComment = (id, comment) => {
  return async (dispatch) =>{
    try{
      const {data: added} = await axios.post(`/api/discussions/${id}`, comment)
      dispatch(_addComment(added))
    } catch (err) {
      console.log(err)
    }
  }
}
///

const initialState = {comments: []}
// const initialState = {comments: [], facts}

 const singleDisReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SINGLE_DISCUSSION:
      return action.discussion
    case ADD_COMMENT:
      return {...state, comment: action.comment}
    default:
      return state
  }
}

export default singleDisReducer;