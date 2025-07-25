import { createSlice } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';

const initialState = {
  cartItem : []
}

const CartSlice = createSlice({
name : 'cart',
initialState: initialState,

reducers :{
    addToCart : (state,action)=>{
        const existing = state.cartItem.find(item => item._id === action.payload._id);
        if (!existing){
            state.cartItem.push(action.payload);
                Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Product added to the cart",
                showConfirmButton: false,
                timer: 1500
});
        }
        else {
            Swal.fire({
                    title: "Already exists in the cart",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonText: "OK",
                    cancelButtonText: "Cancel",
                    customClass: {
                        confirmButton: 'my-swal-confirm',
                        cancelButton: 'my-swal-cancel',
  }
});
     }
    },

    removeFromCart : (state,action)=>
         {
            state.cartItem = state.cartItem.filter(item=>item._id !== action.payload._id);
         },
    
    clearCart : (state) => {
        state.cartItem = [];
    }     
}


})

export const {addToCart,removeFromCart,clearCart} = CartSlice.actions;
export default CartSlice.reducer;

