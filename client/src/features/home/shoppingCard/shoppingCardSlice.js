import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    shoppingCard: [
        {
            __id: "0004582",
            title: 'AMI Paris',
            size: 'S',
            color: 'Noir',
            price: 450
        }
    ],
    open: false,
};

export const shoppingCardSlice = createSlice({
    name: 'shoppingCard',
    initialState,
    reducers: {
        add__toShoppingCard: (state, action) => {
            state.shoppingCard.push(action.payload)
        },
        remove__fromShoppingCard: (state, action) => {
            const index = state.shoppingCard.findIndex(item => item.__id === action.payload)
            if(index === -1) return
            state.shoppingCard.splice(index, 1)
        },
        update__shoppingCard: (state, action) => {
            const index = state.shoppingCard.findIndex(item => item.__id === action.payload.__id)
            if(index === -1) return
            state.shoppingCard[index] = action.payload
        },
        clear__shoppingCard: (state) => {
            state.shoppingCard = []
        },
        toggle__openShoppingCard: (state) => {
            state.open = !state.open;
        }
    },
    extraReducers: {},
});

export const {add__toShoppingCard, remove__fromShoppingCard, update__shoppingCard, clear__shoppingCard, toggle__openShoppingCard} = shoppingCardSlice.actions;

export const selectShoppingCard = state => state.shoppingCard.shoppingCard
export const selectLengthShoppingCard = state => state.shoppingCard.shoppingCard.length
export const selectTotalPrice = state => {
    if(state.shoppingCard.shoppingCard.length === 0) return
    let totalPrice = 0
    state.shoppingCard.shoppingCard.forEach(item => {
        totalPrice += item.price
    })
    return totalPrice
}
export const selectOpenShoppingCard = state => state.shoppingCard.open


export default shoppingCardSlice.reducer;
