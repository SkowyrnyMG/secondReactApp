import {
  LOGIN_REQUEST,
  LOGIN_FAILIURE,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_FAILIURE,
  REGISTER_SUCCESS,
  REGISTER_DEFAULT,
} from 'store/actions/actionsConstants';

const initState = {
  currentUser: {
    email: null,
    uid: null,
    userType: null,
  },
  errorMessage: null,
  redirectLogin: false,
  isLogged: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_FAILIURE:
      return {
        ...state,
        isLogged: false,
        errorMessage: 'Wrong email or password',
      };

    case LOGIN_REQUEST:
      return {
        ...state,
        isLogged: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        errorMessage: null,
        redirectLogin: true,
        isLogged: false,
      };

    case LOGOUT_SUCCESS: {
      return {
        ...state,
        currentUser: {
          userType: null,
        },
        redirectLogin: false,
      };
    }

    case REGISTER_REQUEST:
      return {
        ...state,
        isLogged: true,
      };

    case REGISTER_FAILIURE:
      return {
        ...state,
        isLogged: false,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        redirectLogin: true,
        isLogged: false,
      };

    case REGISTER_DEFAULT:
      return {
        ...state,
        redirectLogin: false,
      };

    default: {
      return state;
    }
  }
};

export default authReducer;
