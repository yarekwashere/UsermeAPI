import { GET_PROFILE, GET_CONTACTS } from '@/redux/actions/user';

const initialState = {
  currentUser: null,
  currentContacts: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        currentUser: payload,
      };
    case GET_CONTACTS:
      return {
        ...state,
        currentContacts: payload,
      };
    default:
      return state;
  }
};
