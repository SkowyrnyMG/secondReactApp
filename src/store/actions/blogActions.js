import axios from 'axios';

import {
  ADD_ITEM_REQUEST,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILIURE,
  TOGGLE_MODAL,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILIURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILIURE,
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILIURE,
} from 'store/actions/actionsConstants';

export const results = axios.create({
  baseURL: 'https://advblogv2.firebaseio.com/',
});

export const createBlog = (blog) => {
  return (dispatch) => {
    dispatch({ type: 'CREATE_BLOG', payload: blog });
  };
};

export const addItem = (item) => (dispatch) => {
  dispatch({ type: ADD_ITEM_REQUEST });

  return results
    .post('/response.json', item)
    .then(({ data }) => {
      return [
        {
          ...item,
          id: data.name,
        },
      ];
    })
    .then((newItem) => {
      dispatch({ type: ADD_ITEM_SUCCESS, payload: newItem });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADD_ITEM_FAILIURE });
    });
};

export const openCloseModal = (item) => (dispatch) => {
  dispatch({
    type: TOGGLE_MODAL,
    payload: item,
  });
};

export const getData = () => (dispatch) => {
  dispatch({ type: FETCH_REQUEST });
  return results
    .get('/response.json')
    .then(({ data }) => {
      const fetchedData = [];
      for (const key of Object.keys(data)) {
        fetchedData.unshift({
          ...data[key],
          id: key,
        });
      }
      return fetchedData;
    })
    .then((fetchedData) => {
      dispatch({ type: FETCH_SUCCESS, payload: fetchedData });
    })

    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_FAILIURE });
    });
};

export const addComment = (id, comment, userId) => (dispatch) => {
  dispatch({ type: ADD_COMMENT_REQUEST });

  const commentMatchedWithId = {
    comment: {
      userId,
      comment: Object.values(comment)[0],
    },
  };

  return results
    .post(`/response/${id}/comments.json`, commentMatchedWithId)
    .then(({ data }) => {
      return [
        {
          ...comment,
          id: data.name,
        },
      ];
    })
    .then((newComment) => {
      dispatch({ type: ADD_COMMENT_SUCCESS, payload: newComment });
    })
    .catch((err) => {
      dispatch({ type: ADD_COMMENT_FAILIURE, err });
    });
};

export const getComments = (postId) => (dispatch) => {
  dispatch({ type: FETCH_COMMENTS_REQUEST });

  results
    .get(`/response/${postId}/comments.json`)
    .then(({ data }) => {
      const comments = [];
      if (data) {
        for (const [key, value] of Object.entries(data)) {
          const content = {
            ...value.comment,
            key,
          };
          comments.push(content);
        }
      }

      dispatch({ type: FETCH_COMMENTS_SUCCESS, payload: comments.flat() });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_COMMENTS_FAILIURE, err });
    });
};
