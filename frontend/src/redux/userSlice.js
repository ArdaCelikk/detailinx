import { createSlice } from '@reduxjs/toolkit'


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: [],
    isLoggedIn: false
  },
  reducers: {
    setUserInformations: (state, action) => {
      state.user = action.payload
      state.isLoggedIn = true
    },
    setUserIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUserInformations, setUserIsLoggedIn } = userSlice.actions

export default userSlice.reducer