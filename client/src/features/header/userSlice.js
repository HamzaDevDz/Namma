import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    statusConnexion: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {},
});

// export const {} = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
