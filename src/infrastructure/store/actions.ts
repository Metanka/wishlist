import {ActionCreatorsMapObject, bindActionCreators} from 'redux';
import {store} from './config';
import {ActionType, AddPurchaseAction, Purchase} from './types';

export const addPurchase = (purchase: Purchase) => ({
  type: ActionType.AddPurchase,
  payload: purchase,
});

export const actions = {
  addPurchase: bindActionCreators<any, any>(addPurchase as any, store.dispatch as any)
}