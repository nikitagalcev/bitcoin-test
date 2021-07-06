import { Middleware } from 'redux'
import { userHistoryTypesArr } from '../../reducers/user/user.types';
import { RootState } from '../rootReducer';

export const historyMiddleware: Middleware<{}, RootState> = storeAPI => next => action => {
  const applyHistoryObj = () => {
    storeAPI.getState().user.actionsHistory = [
      action.payload.historyObj || action.payload, 
      ...storeAPI.getState().user.actionsHistory
    ];
  };

  if (userHistoryTypesArr.includes(action.type)) {
    applyHistoryObj();
  };
  
  return next(action);
};
