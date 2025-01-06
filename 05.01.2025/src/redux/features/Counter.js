import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
    name: "count",
    initialState: { val: 0},
    reducers: {
        increment: (state) =>{
            state.val += 1;
        },
        decrement: (state) =>{
            if (state.val > 0) {
                 state.val -= 1
            }else{
                state.val = 0;
            }
           ;
        },
        reset: (state) =>{
            state.val = 0;
        }
    }
});

export const {increment,decrement,reset} = counter.actions;

export default counter.reducer