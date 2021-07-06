import { INCREMENT_BITCOIN_PRICE, DECREMENT_BITCOIN_PRICE } from './bitcoin.types';

export const incrementBitcoinPrice = () => ({type: INCREMENT_BITCOIN_PRICE});

export const decrementBitcoinPrice = () => ({type: DECREMENT_BITCOIN_PRICE});