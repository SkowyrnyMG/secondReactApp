import axios from 'axios';

export const ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILIURE = 'ADD_ITEM_FAILIURE';

export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILIURE = 'FETCH_FAILIURE';

export const FETCH_BLOG_REQUEST = 'FETCH_BLOG_REQUEST';
export const FETCH_BLOG_SUCCESS = 'FETCH_BLOG_SUCCESS';
export const FETCH_BLOG_FAILIURE = 'FETCH_BLOG_FAILIURE';

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
      for (let key of Object.keys(data)) {
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

// export const getBlogPost = (id) => (dispatch) => {
//   dispatch({ type: FETCH_BLOG_REQUEST });
//   return results
//     .get('/response.json')
//     .then(({ data }) => {
//       const fetchedData = [];

//       console.log(data);
//       // for (let key of Object.keys(data)) {
//       //   fetchedData.unshift({
//       //     ...data[key],
//       //     id: key,
//       //   });
//       // }
//       return fetchedData;
//     })
//     .then((fetchedData) => {
//       dispatch({ type: FETCH_BLOG_SUCCESS, payload: fetchedData });
//     })

//     .catch((err) => {
//       console.log(err);
//       dispatch({ type: FETCH_BLOG_FAILIURE });
//     });
// };
