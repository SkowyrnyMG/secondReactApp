import {
  TOGGLE_MODAL,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  ADD_ITEM_SUCCESS,
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
} from 'store/actions/actionsConstants';

const initState = {
  isPostPanelOpen: false,
  posts: [],
  comments: null,
  isLoading: false,
};

const blogReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_ITEM_SUCCESS:
      // console.log(action.payload);
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
      };
    case TOGGLE_MODAL:
      return {
        ...state,
        isPostPanelOpen: !state.isPostPanelOpen,
      };

    case FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        posts: [...action.payload],
        isLoading: false,
      };

    case FETCH_COMMENTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: [...action.payload],
        isLoading: false,
      };

    default:
      return state;
  }
};

export default blogReducer;
