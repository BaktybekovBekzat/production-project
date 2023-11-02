import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IProfile, IProfileSchema } from '../types/profile'
import { fetchProfileData } from '../services/fetchProfileData'

const initialState: IProfileSchema = {
	data: undefined,
	isLoading: false,
	error: undefined,
	readonly: true,
}

const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchProfileData.pending, (state) => {
				state.isLoading = true
			})
			.addCase(
				fetchProfileData.fulfilled,
				(state, action: PayloadAction<IProfile>) => {
					state.isLoading = false
					state.data = action.payload
				}
			)
			.addCase(fetchProfileData.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
	},
})

export const { actions: profileActions, reducer: profileReducer } = profileSlice
