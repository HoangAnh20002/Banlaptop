import { createSlice } from '@reduxjs/toolkit'

const initialState = {

  product: [

    { id: 1, name: "ASUS ROG Strix SCAR III G531GN-VAZ160T",img:"https://laptop2.webdaitin.net/wp-content/uploads/2020/08/ASUS-ROG-Strix-SCAR-III-Laptop-1-510x510-1-247x296.jpg", price: "44.600.000₫" },
    { id: 2, name: "Acer Predator Helios 300 PH315-52-78HH Gaming",img:"https://laptop2.webdaitin.net/wp-content/uploads/2020/08/Acer-Predator-Helios-300-PH315-52-Gaming-Laptop-1-247x296.jpg", price: "35.600.000₫" },
    { id: 3, name: "HP Omen 15-dh0172TX Gaming Laptop",img:"https://laptop2.webdaitin.net/wp-content/uploads/2020/08/HP-Omen-15-Gaming-Laptop-1-510x510-1-247x296.jpg", price: "35.600.000₫" },
    { id: 4, name: "LG Gram 14ZD90N-V.AX55A5 Laptop - Silver",img:"https://laptop2.webdaitin.net/wp-content/uploads/2020/08/LG-Gram-14ZD90N-V.AX55A5-Laptop-v2-510x510-1-247x296.jpg", price: "29.600.000₫" }

  ],
  getDetails:[]
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    update: (state, action) => {
      //   state.value= value
    },
    getDetails:(state,action)=>{
      const {data} = action.payload
      state.getDetails.push(data)
    }

  },
})

// Action creators are generated for each case reducer function
export const { update,getDetails } = productSlice.actions

export default productSlice.reducer