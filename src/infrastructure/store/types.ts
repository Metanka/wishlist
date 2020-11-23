export type Purchase = {
  text: string;
  price: string;
}

export type State = {
  purchases: Purchase[];
};

// перечисление каких-то типовых названий
export enum ActionType {
  AddPurchase = 'AddPurchase',
}

// Дженерик - можно указать какой тип на самом деле в будущем (типа пропса)

export type Action<T extends ActionType, P = string> = {
  // название
  type: T;
  // необязательно, тело с данными
  payload: P;
}

export type AddPurchaseAction = Action<ActionType.AddPurchase, Purchase>;

export type AllActions = AddPurchaseAction;