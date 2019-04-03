import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

import { clientDetails } from '../../../../common/types/clientDetails';

const GET_CLIENT_DETAILS = 'app/clientDetails/GET_CLIENT_DETAILS';
const UPDATE_CLIENT_DETAILS = 'app/clientDetails/UPDATE_CLIENT_DETAILS';

export const constants = {
  GET_CLIENT_DETAILS,
  UPDATE_CLIENT_DETAILS,
};

// ------------------------------------
// Actions
// ------------------------------------
export const getClientDetails = createAction(GET_CLIENT_DETAILS, () => ({}));
export const updateClientDetails = createAction(UPDATE_CLIENT_DETAILS, (result : clientDetails) => ({ result }));

export const actions = {
  getClientDetails,
  updateClientDetails,
};

export const reducers = {
  [UPDATE_CLIENT_DETAILS]: (state, { payload }) => state.merge({
    ...payload,
  }),
}

export const initialState = () => Map({
  result: {},
})

export default handleActions(reducers, initialState());