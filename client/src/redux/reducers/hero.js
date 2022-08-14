import { GET_HEROES } from '../constants/constants';

const initialState = [];

const heroReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_HEROES:
      return payload;
    default:
      return state;
  }
};
export default heroReducer;
