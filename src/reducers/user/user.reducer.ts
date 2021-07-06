import {
  USER_DEPOSIT_USD_BALANCE, 
  USER_WITHDRAW_USD_BALANCE, 
  USER_BUY_BTC, 
  USER_SELL_BTC,
  USER_GET_ERROR,
  UserActionTypes
} from './user.types';


type UserState = {
  actionsHistory: {date: Date, event: string}[],
  bitcoinBalance: number,
  usdBalance: number,
  error: string,
}

const INITIAL_STATE: UserState = {
  actionsHistory: [],
  bitcoinBalance: 0,
  usdBalance: 200,
  error: '',
}

const userReducer = (state = INITIAL_STATE, action: UserActionTypes): UserState => {
  switch (action.type) {
    case USER_DEPOSIT_USD_BALANCE:
      return {
        ...state,
        usdBalance: state.usdBalance += 100,
      }
    case USER_WITHDRAW_USD_BALANCE:
      return {
        ...state,
        usdBalance: state.usdBalance -= 100,
      }
    case USER_BUY_BTC:
      return {
        ...state,
        usdBalance: state.usdBalance - action.payload.btcPrice,
        bitcoinBalance: state.bitcoinBalance += 1,
      }
      case USER_SELL_BTC:
        return {
          ...state,
          usdBalance: state.usdBalance + action.payload.btcPrice,
          bitcoinBalance: state.bitcoinBalance -= 1,
        }
      case USER_GET_ERROR:
        return {
          ...state,
          error: action.payload,
        }
    default: return state;
  }
}

export default userReducer;