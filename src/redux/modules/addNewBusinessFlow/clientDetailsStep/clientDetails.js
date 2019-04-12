import { createAction, handleActions } from 'redux-actions';

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
export const updateClientDetails = createAction(UPDATE_CLIENT_DETAILS, (result) => ({ result }));

export const actions = {
  getClientDetails,
  updateClientDetails,
};

export const reducers = {
  [UPDATE_CLIENT_DETAILS]: 
  (state = initialState, {payload}) => {
    return {...state, ...payload}
  }
}

export const initialState = () => ({
  name: '',
  planEffectiveDate: '',
  planEndDate: '',
  numOfEligibleEmployees: 0
})

export default handleActions(reducers, initialState());