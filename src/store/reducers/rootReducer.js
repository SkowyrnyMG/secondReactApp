import authReducer from 'store/reducers/authReducer';
import blogReducer from 'store/reducers/blogReducer';
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  blog: blogReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
