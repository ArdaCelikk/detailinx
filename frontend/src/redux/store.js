import { configureStore } from '@reduxjs/toolkit'
import settingSlice from './settingSlice'
import userSlice from './userSlice'
import adminSlice from './adminSlice'
import productSlice from './productSlice'


export default configureStore({
  reducer: {
    settings: settingSlice,
    user: userSlice,
    admin: adminSlice,
    product: productSlice
  },
})