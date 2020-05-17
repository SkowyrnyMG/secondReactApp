import { TOGGLE_MODAL, FETCH_SUCCESS, ADD_ITEM_SUCCESS } from 'store/actions/blogActions';

const initState = {
  isPostPanelOpen: false,
  posts: [],
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

    case FETCH_SUCCESS:
      // console.log({ state });
      return {
        ...state,
        posts: [...action.payload],
      };

    default:
      return state;
  }
};

export default blogReducer;
