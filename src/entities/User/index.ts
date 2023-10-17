import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData'
import { IUser, IUserSchema } from './model/types/user'
import { userReducer, userActions } from './model/slice/userSlice'

export { userReducer, userActions, IUser, IUserSchema, getUserAuthData }
