import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from '../../types/user.types';

const fetachUserById = (userId: number): Promise<IUser> => new Promise(resolve =>
	setTimeout(() => resolve({
		id: 1,
		name: 'Alexs'
	}), 1000)
)
	;
export const getUserById = createAsyncThunk<IUser, number>(
	'users/by-id',
	async (userId, thunkApi) => {
		try {
			const response = await fetachUserById(userId)
			return response
		} catch (e) {
			return thunkApi.rejectWithValue({ e })
		}
	}
);