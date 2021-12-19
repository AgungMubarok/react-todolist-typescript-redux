import { combineReducers, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import * as reducers from './reducers/todoReducer';

const persistConfig = {
  key: 'fragments',
  storage: storage,
  blacklist: ['addTodoReducers'],
};

const addPersistConfig = {
  key: 'add',
  storage: storage,
  blacklist: ['error'],
};

const rootReducers = combineReducers({
  addTodoReducers: persistReducer(addPersistConfig, reducers.addTodoReducers),
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { persistor, store };
export type RootState = ReturnType<typeof rootReducers>;
