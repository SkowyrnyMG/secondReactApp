import firebase from 'config/fbConfig';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILIURE = 'LOGIN_FAILIURE';

export const signIn = (credentials) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  const { userEmail, password } = credentials;

  firebase
    .auth()
    .signInWithEmailAndPassword(userEmail, password)
    .then(({ user }) => {
      console.log(user);
      const { email, l } = user;
      dispatch({ type: LOGIN_SUCCESS, payload: { email, l } });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: LOGIN_FAILIURE, payload: err });
    });
};
