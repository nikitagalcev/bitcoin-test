import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './rootReducer';
import { historyMiddleware } from './middleware';

const store = createStore(rootReducer, applyMiddleware(historyMiddleware))

export default store;
