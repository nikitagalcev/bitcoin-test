import { USER_INCREASE_BITCOIN_PRICE, USER_DECREASE_BITCOIN_PRICE } from './user.types';

export const userIncreaseBitcoinPrice = () => {
  return {
    type: USER_INCREASE_BITCOIN_PRICE
  }
};

export const userDecreaseBitcoinPrice = () => {
  return {
    type: USER_DECREASE_BITCOIN_PRICE
  }
};