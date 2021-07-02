import { combineReducers } from 'redux';
import bitcoinReducer from '../reducers/bitcoin/bitcoin.reducer';
import userReducer from '../reducers/user/user.reducer';

export const rootReducer = combineReducers({
  bitcoin: bitcoinReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;