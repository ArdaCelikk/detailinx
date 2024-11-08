import { createSlice } from '@reduxjs/toolkit'


export const userSlice = createSlice({
  name: 'admin',
  initialState: {
    users: [],
    orders: [],
    visitors: [],
    finance_stats: [],
    isLoggedIn: false
  },
  reducers: {
    setAdminInformations: (state, action) => {
      state.isLoggedIn = action.payload.adminIsLoggedIn
      state.orders = action.payload.orders
      state.users = action.payload.users
      state.visitors = action.payload.visitors
    },
    setOrdersInformation: (state, action) => {
      state.orders = action.payload
    },
    setFinanceStats: (state, action) => {
      state.finance_stats = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAdminInformations, setOrdersInformation, setFinanceStats } = userSlice.actions

export default userSlice.reducer