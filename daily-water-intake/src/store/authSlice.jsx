import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: localStorage.getItem("user_email")
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.email = action.payload;
            localStorage.setItem("user_email", action.payload);
        },
        logout: (state) => {
            state.email = null;
            localStorage.removeItem("user_email");
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
