import { 
  USER_INCREASE_BITCOIN_PRICE, 
  USER_DECREASE_BITCOIN_PRICE, 
  USER_DEPOSIT_USD_BALANCE, 
  USER_WITHDRAW_USD_BALANCE,
  USER_BUY_BTC,
  USER_SELL_BTC,
  USER_GET_ERROR,
  historyObjType
} from './user.types';

interface UserSellBuyBtc {
  bitcoinPrice: number,
  historyObj: historyObjType;
}


export const userIncreaseBitcoinPrice = (params: historyObjType) => {
  return {
    type: USER_INCREASE_BITCOIN_PRICE,
    payload: params,
  };
};

export const userDecreaseBitcoinPrice = (params: historyObjType) => {
  return {
    type: USER_DECREASE_BITCOIN_PRICE,
    payload: params,
  };
};

export const userDepositUsdBalance = (params: historyObjType) => {
  return {
    type: USER_DEPOSIT_USD_BALANCE,
    payload: params,
  };
};

export const userWithdrawUsdBalance = (params: historyObjType) => {
  return {
    type: USER_WITHDRAW_USD_BALANCE,
    payload: params,
  };
};

export const userBuyBtc = (params: UserSellBuyBtc) => {
  return {
    type: USER_BUY_BTC,
    payload: params
  };
};

export const userSellBtc = (params: UserSellBuyBtc) => {
  return {
    type: USER_SELL_BTC,
    payload: params,
  };
};

export const userGetError = (message: string) => {
  return {
    type: USER_GET_ERROR,
    payload: message,
  }
}