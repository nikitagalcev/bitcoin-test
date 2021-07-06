export const USER_INCREASE_BITCOIN_PRICE = 'USER_INCREASE_BITCOIN_PRICE';
export const USER_DECREASE_BITCOIN_PRICE = 'USER_DECREASE_BITCOIN_PRICE';
export const USER_DEPOSIT_USD_BALANCE = 'USER_DEPOSIT_USD_BALANCE';
export const USER_WITHDRAW_USD_BALANCE = 'USER_WITHDRAW_USD_BALANCE';
export const USER_BUY_BTC = 'USER_BUY_BTC';
export const USER_SELL_BTC = 'USER_SELL_BTC';
export const USER_GET_ERROR = 'USER_GET_ERROR';

export const userHistoryTypesArr = [
  USER_INCREASE_BITCOIN_PRICE, 
  USER_DECREASE_BITCOIN_PRICE, 
  USER_DEPOSIT_USD_BALANCE, 
  USER_WITHDRAW_USD_BALANCE, 
  USER_BUY_BTC,
  USER_SELL_BTC
]

export type historyObjType = {
  date: Date,
  event: string,
}
export interface IuserIncreaseBictoinPriceAction {
  type: typeof USER_INCREASE_BITCOIN_PRICE;
  payload: historyObjType;
}
export interface IuserDecreaseBictoinPriceAction {
  type: typeof USER_DECREASE_BITCOIN_PRICE;
  payload: historyObjType;
}

export interface IuserDepositUsdBalanceAction {
  type: typeof USER_DEPOSIT_USD_BALANCE;
  payload: historyObjType;
}

export interface IuserWithdrawUsdBalanceAction {
  type: typeof USER_WITHDRAW_USD_BALANCE;
  payload: historyObjType;
}

export interface IuserBuyBtcAction {
  type: typeof USER_BUY_BTC;
  payload: {
    btcPrice: number,
    historyObj: historyObjType
  }
}

export interface IuserSellBtcAction {
  type: typeof USER_SELL_BTC;
  payload: {
    btcPrice: number,
    historyObj: historyObjType
  }
}

export interface IuserGetErrorAction {
  type: typeof USER_GET_ERROR;
  payload: string
}

export type UserActionTypes = 
  | IuserIncreaseBictoinPriceAction
  | IuserDecreaseBictoinPriceAction
  | IuserDepositUsdBalanceAction
  | IuserWithdrawUsdBalanceAction
  | IuserBuyBtcAction
  | IuserSellBtcAction
  | IuserGetErrorAction;
