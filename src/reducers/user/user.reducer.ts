import { USER_INCREASE_BITCOIN_PRICE, USER_DECREASE_BITCOIN_PRICE } from './user.types';

type actionType = {
  type: string,
  payload?: any, // change
}

// type historyObj = {
//   date: string,
//   action: string
// }

interface UserState {
  actionsHistory: any[] // change,
  bitcoinBalance: number,
  usdBalance: number,
}

const INITIAL_STATE: UserState = {
  actionsHistory: [],
  bitcoinBalance: 0,
  usdBalance: 200,
}

const userReducer = (state = INITIAL_STATE, action: actionType): UserState => {
  switch (action.type) {
    case USER_INCREASE_BITCOIN_PRICE:
      return {
        ...state,
        actionsHistory: [
          {
            date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' }),
            action: 'Increased Bitcoin price by 1,000$'
          }
          , ...state.actionsHistory]
      }
    case USER_DECREASE_BITCOIN_PRICE:
      return {
        ...state,
        actionsHistory: [
          {
            date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' }),
            action: 'Decreased Bitcoin price by 1,000$'
          }
          , ...state.actionsHistory]
      }
    default: return state;
  }
}

export default userReducer;