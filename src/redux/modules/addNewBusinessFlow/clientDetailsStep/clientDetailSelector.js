import { createSelector } from 'reselect';

const clientDetailDataSelector = (state) => state.clientDetail;

const resultSelector = createSelector(
    clientDetailDataSelector,
  (payload) => payload.get('result')
);

export const clientDetailSelector = (state) => ({
  result: resultSelector(state),
});