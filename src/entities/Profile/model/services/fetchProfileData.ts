import { createAsyncThunk } from '@reduxjs/toolkit'
import { IThunkConfig } from 'app/providers/StoreProvider'
import { IProfile } from '../types/profile'

export const fetchProfileData = createAsyncThunk<
	IProfile,
	void,
	IThunkConfig<string>
>('profile/fetchProfileData', async (_, thunkApi) => {
	const { extra, rejectWithValue } = thunkApi

	try {
		const response = await extra.api.get('/profile')

		return response.data
	} catch (e) {
		return rejectWithValue('error')
	}
})
