import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as favReduce } from './favorites/favorites.slice';

const reducers = combineReducers({
	favorites: favReduce,
})

export const store = configureStore({
	reducer: reducers,
	devTools: true,
});
