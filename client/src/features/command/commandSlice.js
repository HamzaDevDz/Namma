import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    boolDeliveryAddress: false,
    deliveryAddress: "",
    boolPhoneNumber: false,
    phoneNumber: "",
};

export const commandSlice = createSlice({
    name: 'command',
    initialState,
    reducers: {
        toggleBoolDeliveryAddress: (state, action) => {
            state.boolDeliveryAddress = action.payload
        },
        setDeliveryAddress: (state, action) => {
            state.deliveryAddress = action.payload
        }
    },
    extraReducers: {},
});

export const {toggleBoolDeliveryAddress, setDeliveryAddress} = commandSlice.actions;

export const selectBoolDeliveryAddress = state => state.command.boolDeliveryAddress
export const selectDeliveryAddress = state => state.command.deliveryAddress
export const selectBoolPhoneNumber = state => state.command.boolPhoneNumber

export default commandSlice.reducer;
