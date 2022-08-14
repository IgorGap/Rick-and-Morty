import { DELETE_FAVOR, FAVOR_HEROES } from '../constants/constants';

const initialState = [];

const favorReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FAVOR_HEROES:
      const arr = state.filter((item) => item.id === payload.id);
      // console.log('arr', arr);
      if (!arr.length) return [...state, payload];
      return [...state];
    case DELETE_FAVOR:
      return state.filter((fav) => fav.id !== payload);
    default:
      return state;
  }
};
export default favorReducer;
