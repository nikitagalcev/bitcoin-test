import { INCREMENT_BITCOIN_PRICE, DECREMENT_BITCOIN_PRICE } from './bitcoin.types';

export const incrementBitcoinPrice = () => {
  return {
    type: INCREMENT_BITCOIN_PRICE
  }
};

export const decrementBitcoinPrice = () => {
  return {
    type: DECREMENT_BITCOIN_PRICE
  }
};