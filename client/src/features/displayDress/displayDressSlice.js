import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from "axios";
import {serverPrefix} from "../../ServerPrefix";

const initialState = {
    loadDisplayDress: true,
    displayDress: {},
    selectedSize: "",
    selectedColor: "",
};

export const getDisplayDress = createAsyncThunk(
    'products/download/single',
    async (id) => {
        const response = await axios.get(serverPrefix + "products/download/single?id="+id);
        return response.data;
    }
);

export const displayDressSlice = createSlice({
    name: 'displayDress',
    initialState,
    reducers: {
        setSelectedSize: (state, action) => {
            state.selectedSize = action.payload
        },
        setSelectedColor: (state, action) => {
            state.selectedColor = action.payload
        }
    },
    extraReducers: {
        [getDisplayDress.pending] : (state) => {
            state.loadDisplayDress = true
        },
        [getDisplayDress.fulfilled] : (state, action) => {
            state.displayDress = action.payload
            state.loadDisplayDress = false
        },
    },
});

export const {setSelectedSize, setSelectedColor} = displayDressSlice.actions;

export const selectDisplayDress = state => state.displayDress.displayDress
export const selectLoadDisplayDress = state => state.displayDress.loadDisplayDress
export const selectSelectedSize = state => state.displayDress.selectedSize
export const selectSelectedColor  = state => state.displayDress.selectedColor

export default displayDressSlice.reducer;
