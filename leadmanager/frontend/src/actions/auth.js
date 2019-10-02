import axios from 'axios';
import { returnErrors } from './messages';
import { USER_LOADED, USER_LOADING, AUTH_ERROR } from './types';

// Check Token & Load User
export const loadUser = () => (dispatch, getState) => {
  // User Loading
  dispatch({ type: USER_LOADING });

  // Get Token From State
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  };

  // If Token, Add To Headers Config
  if (token) {
    config.headers['Authorizations'] = `Token ${token}`;
  }

  axios
    .get('/api/auth/user', config)
    .then(res => {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response, status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};
