import { createSlice } from '@reduxjs/toolkit'
import { IUserSchema } from '../types/user'

const initialState: IUserSchema = {
	authData: undefined,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
})

export const { actions: userActions, reducer: userReducer } = userSlice
