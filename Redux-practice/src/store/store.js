import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as favReduce } from './favorites/favorites.slice';
import { userSlice } from './user/user.slice';

const reducers = combineReducers({
	favorites: favReduce,
	users: userSlice.reducer
})

export const store = configureStore({
	reducer: reducers,
	devTools: true,
});
