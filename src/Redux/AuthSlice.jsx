import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    msg: '',
    user: '',
    token: '',
    loading: false,
    error: ''
};

export const signUpUser = createAsyncThunk(
    "auth/signUpUser", async (body)=> {
        const res = await fetch("dddd",{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        })

        return await res.json()
    }
);



const AuthSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers:{
        [signUpUser.pending]: (state, action) => {
            state.loading = true;
        },
        [signUpUser.fulfilled]: (state, action) => {
            state.loading = false;
            if (action.payload.error){
                state.error = action.payload.error
            }
            else {
                state.msg = action.payload.msg
            }
        },
        [signUpUser.rejected]: (state, action) => {
            state.loading = false;
        }
    }
})

export default AuthSlice.reducer