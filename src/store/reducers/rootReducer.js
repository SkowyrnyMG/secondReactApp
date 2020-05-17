import authReducer from 'store/reducers/authReducer';
import blogReducer from 'store/reducers/blogReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  blog: blogReducer,
});

export default rootReducer;
