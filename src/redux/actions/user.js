import { api } from '@/constants/api';

export const GET_PROFILE = 'GET_PROFILE';
export const GET_USERS = 'GET_USERS';
export const GET_CONTACTS = 'GET_CONTACTS';

export const getUsersAction = (payload) => ({ type: GET_USERS, payload });
export const getProfileAction = (payload) => ({ type: GET_PROFILE, payload });
export const getContactsAction = (payload) => ({ type: GET_CONTACTS, payload });

// export const getUsers = () => async (dispatch) => {
//   try {
//     const res = await api.get('/?results=50');
//     dispatch(getUsersAction(res.data.results[0]));
//   } catch (e) {
//     console.log(e);
//   }
// };

export const getProfile = () => async (dispatch) => {
  try {
    const res = await api.get('/');
    dispatch(getProfileAction(res.data.results[0]));
  } catch (e) {
    console.log(e);
  }
};

export const getContacts = () => async (dispatch) => {
  try {
    const res = await api.get('/?results=8');
    dispatch(getContactsAction(res.data.results));
  } catch (e) {
    console.log(e);
  }
};
