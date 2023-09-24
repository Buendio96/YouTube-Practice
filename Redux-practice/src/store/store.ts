import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger'
import { reducer as favReduce } from './favorites/favorites.slice';
import { userSlice } from './user/user.slice';
import { api } from './api/api';
const logger = createLogger({
	collapsed: true
})
const reducers = combineReducers({
	favorites: favReduce,
	users: userSlice.reducer,
	[api.reducerPath]: api.reducer,
})

export const store = configureStore({
	reducer: reducers,
	devTools: true,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware).concat(logger)
});

export type RootState = ReturnType<typeof store.getState>