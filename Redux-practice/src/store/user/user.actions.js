import { createAsyncThunk } from '@reduxjs/toolkit';

const fetachUserById = userId => new Promise(resolve =>
	setTimeout(() => resolve({
		id: 1,
		name: 'Alexs'
	}), 1000)
)
	;
export const getUserById = createAsyncThunk(
	'users/by-id',
	async (userId, thunkApi) => {
		try {
			const response = await fetachUserById(userId)
			return response
		} catch (e) {
			thunkApi.rejectWithValue({ e })
		}
	}
);