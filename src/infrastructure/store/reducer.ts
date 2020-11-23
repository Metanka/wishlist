import {INITIAL_STATE} from './consts';
import {ActionType, AllActions, State} from './types';

export const reducer = (state: State = INITIAL_STATE, action: AllActions): State => {
  switch (action.type) {
    case ActionType.AddPurchase: {
      return {
        ...state,
        purchases: [
          ...state.purchases,
          action.payload,
        ]
      }
    }
    default: {
      return state;
    }
  }
};