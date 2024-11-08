import { createSlice } from '@reduxjs/toolkit'

export const settingSlice = createSlice({
    name: 'settings',
    initialState: {
        settings: {},
        pages: {}
    },
    reducers: {
        readPagesSettings: (state, action) => {
            state.pages = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { readPagesSettings } = settingSlice.actions

export default settingSlice.reducer