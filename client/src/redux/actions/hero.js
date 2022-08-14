import {
  FAVOR_HEROES,
  GET_HEROES,
} from '../constants/constants';

export const getHereos = (data) => ({ type: GET_HEROES, payload: data });
export const favorHereos = (data) => ({ type: FAVOR_HEROES, payload: data });

export const getHereosThunk = (data) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${data.nums}`,
    );
    const res = await response.json();
    dispatch(getHereos(res));
  } catch (error) {
    console.log(error);
  }
};
