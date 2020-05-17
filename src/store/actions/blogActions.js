import axios from 'axios';

export const ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILIURE = 'ADD_ITEM_FAILIURE';

export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILIURE = 'FETCH_FAILIURE';

const results = axios.create({
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
      const newItem = [
        {
          ...item,
          id: data.name,
        },
      ];
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
      // console.log(data);
      const fetchedData = [];

      for (let key of Object.keys(data)) {
        fetchedData.unshift({
          ...data[key],
          id: key,
        });
      }

      dispatch({ type: FETCH_SUCCESS, payload: fetchedData });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_FAILIURE });
    });
};
