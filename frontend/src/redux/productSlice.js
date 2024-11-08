import { createSlice } from '@reduxjs/toolkit'


export const userSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    singleProduct: []
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.map(product => {
        product.pictures = JSON.parse(JSON.parse(product.pictures))
        return product
      })
    },
    setSingleProduct: (state, action) => {
      state.singleProduct = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setProducts, setSingleProduct } = userSlice.actions

export default userSlice.reducer