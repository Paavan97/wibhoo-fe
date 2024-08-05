import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../App/store"; // Adjust the import based on your store file location

interface CartState {
  carts: any[];
  itemsCount: number;
  totalAmount: number;
  isCartMessageOn: boolean;
}

// Utility functions
const fetchFromLocalStorage = (): any[] => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

const storeInLocalStorage = (data: any[]) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

// Initial state
const initialState: CartState = {
  carts: fetchFromLocalStorage(),
  itemsCount: 0,
  totalAmount: 0,
  isCartMessageOn: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      const isItemInCart = state.carts.find(item => item.id === action.payload.id);

      if (isItemInCart) {
        const tempCart = state.carts.map(item => {
          if (item.id === action.payload.id) {
            const tempQty = item.quantity + action.payload.quantity;
            const tempTotalPrice = tempQty * item.price;

            return { ...item, quantity: tempQty, totalPrice: tempTotalPrice };
          }
          return item;
        });

        state.carts = tempCart;
      } else {
        state.carts.push(action.payload);
      }
      storeInLocalStorage(state.carts);
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      const tempCart = state.carts.filter(item => item.id !== action.payload);
      state.carts = tempCart;
      storeInLocalStorage(state.carts);
    },

    clearCart: (state) => {
      state.carts = [];
      storeInLocalStorage(state.carts);
    },

    getCartTotal: (state) => {
      state.totalAmount = state.carts.reduce((cartTotal, cartItem) => cartTotal + cartItem.totalPrice, 0);
      state.itemsCount = state.carts.length;
    },

    toggleCartQty: (state, action: PayloadAction<{ id: number; type: "INC" | "DEC" }>) => {
      const tempCart = state.carts.map(item => {
        if (item.id === action.payload.id) {
          let tempQty = item.quantity;
          let tempTotalPrice = item.totalPrice;

          if (action.payload.type === "INC") {
            tempQty++;
            if (tempQty === item.stock) tempQty = item.stock;
            tempTotalPrice = tempQty * item.discountedPrice;
          }

          if (action.payload.type === "DEC") {
            tempQty--;
            if (tempQty < 1) tempQty = 1;
            tempTotalPrice = tempQty * item.discountedPrice;
          }

          return { ...item, quantity: tempQty, totalPrice: tempTotalPrice };
        }
        return item;
      });

      state.carts = tempCart;
      storeInLocalStorage(state.carts);
    },

    setCartMessageOn: (state) => {
      state.isCartMessageOn = true;
    },

    setCartMessageOff: (state) => {
      state.isCartMessageOn = false;
    },
  },
});

export const {
  addToCart,
  setCartMessageOff,
  setCartMessageOn,
  getCartTotal,
  toggleCartQty,
  clearCart,
  removeFromCart,
} = cartSlice.actions;

export const getAllCarts = (state: RootState) => state.CartItem.carts;
export const getCartItemsCount = (state: RootState) => state.CartItem.itemsCount;
export const getCartMessageStatus = (state: RootState) => state.CartItem.isCartMessageOn;

export default cartSlice.reducer;
export type { CartState };
