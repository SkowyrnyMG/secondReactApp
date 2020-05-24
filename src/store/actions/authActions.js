import axios from 'axios';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILIURE,
  REGISTER_DEFAULT,
  REGISTER_FAILIURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_FAILIURE,
  LOGOUT_SUCCESS,
  auth,
} from 'store/actions/actionsConstants';

export const startPoint = axios.create({
  baseURL: 'https://advblogv2.firebaseio.com/',
});

export const register = (credentials) => (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });

  const { userEmail, password } = credentials;

  auth
    .createUserWithEmailAndPassword(userEmail, password)
    .then(({ user }) => {
      console.log(user);
      dispatch({ type: REGISTER_SUCCESS, payload: user });
      return user.uid;
    })
    .then((id) => {
      const userType = {
        user: 'user',
      };
      startPoint.put(`users/${id}.json`, userType);
    })
    .then(() => {
      dispatch({ type: REGISTER_DEFAULT });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: REGISTER_FAILIURE, err });
    });
};

export const signIn = (credentials) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  const { userEmail, password } = credentials;

  auth
    .signInWithEmailAndPassword(userEmail, password)
    .then(({ user }) => {
      const { email, uid } = user;

      startPoint
        .get(`/users/${uid}.json`)
        .then(({ data }) => {
          const { user: userType } = data;
          const userInfo = { email, uid, userType };

          return userInfo;
        })
        .then((userInfo) => {
          dispatch({ type: LOGIN_SUCCESS, payload: userInfo });
        });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: LOGIN_FAILIURE, payload: err });
    });
};

export const signOut = () => (dispatch) => {
  dispatch({ type: LOGOUT_REQUEST });

  auth
    .signOut()
    .then(() => dispatch({ type: LOGOUT_SUCCESS }))
    .catch((err) => {
      console.log(err);
      dispatch({ type: LOGOUT_FAILIURE, err });
    });
};
