import { LOGIN_FAILIURE, LOGIN_SUCCESS } from 'store/actions/authActions';

const initState = {
  currentUser: null,
  errorMessage: null,
};

const authReducer = (state = initState, action) => {
  console.log(action.payload);
  console.log(state);
  switch (action.type) {
    case LOGIN_FAILIURE: {
      return {
        ...state,
        // errorMessage: action.payload,
        errorMessage: 'Wrong email or password',
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        currentUser: action.payload,
        errorMessage: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
