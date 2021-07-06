import { INCREMENT_BITCOIN_PRICE, DECREMENT_BITCOIN_PRICE } from './bitcoin.types';

interface IBitcoinState {
  btcPrice: number,
  btcConvertToUSD: number,
}

const INITIAL_STATE: IBitcoinState = {
  btcPrice: 1000,
  btcConvertToUSD: 33608,
}

const bitcoinReducer = (state = INITIAL_STATE, action: {type: string}): IBitcoinState => {
  switch (action.type) {
    case INCREMENT_BITCOIN_PRICE:
      return {
        ...state, 
        btcPrice: state.btcPrice += 1000,
      }
    case DECREMENT_BITCOIN_PRICE:
      return {
        ...state, 
        btcPrice: state.btcPrice -= 1000,
      }
    default: return state;
  }
}

export default bitcoinReducer;