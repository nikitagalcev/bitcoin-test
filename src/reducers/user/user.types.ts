export const USER_INCREASE_BITCOIN_PRICE = 'USER_INCREASE_BITCOIN_PRICE';
export const USER_DECREASE_BITCOIN_PRICE = 'USER_DECREASE_BITCOIN_PRICE';
export const USER_DEPOSIT_USD_BALANCE = 'USER_DEPOSIT_USD_BALANCE';
export const USER_WITHDRAW_USD_BALANCE = 'USER_WITHDRAW_USD_BALANCE';
export const USER_BUY_BTC = 'USER_BUY_BTC';
export const USER_SELL_BTC = 'USER_SELL_BTC';
export const USER_GET_ERROR = 'USER_GET_ERROR';

export type historyObjType = {
  date: string
  event: string,
}
export interface userIncreaseBictoinPriceAction {
  type: typeof USER_INCREASE_BITCOIN_PRICE;
  payload: historyObjType;
}
export interface userDecreaseBictoinPriceAction {
  type: typeof USER_DECREASE_BITCOIN_PRICE;
  payload: historyObjType;
}

export interface userDepositUsdBalanceAction {
  type: typeof USER_DEPOSIT_USD_BALANCE;
  payload: historyObjType;
}

export interface userWithdrawUsdBalanceAction {
  type: typeof USER_WITHDRAW_USD_BALANCE;
  payload: historyObjType;
}

export interface userBuyBtcAction {
  type: typeof USER_BUY_BTC;
  payload: {
    bitcoinPrice: number,
    historyObj: historyObjType
  }
}

export interface userSellBtcAction {
  type: typeof USER_SELL_BTC;
  payload: {
    bitcoinPrice: number,
    historyObj: historyObjType
  }
}

export interface userGetErrorAction {
  type: typeof USER_GET_ERROR;
  payload: string
}

export type UserActionTypes = 
  | userIncreaseBictoinPriceAction
  | userDecreaseBictoinPriceAction
  | userDepositUsdBalanceAction
  | userWithdrawUsdBalanceAction
  | userBuyBtcAction
  | userSellBtcAction
  | userGetErrorAction;
