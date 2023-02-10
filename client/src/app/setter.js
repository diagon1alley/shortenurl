import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchshortenedUrl = createAsyncThunk(
    'shortened/fetchshortenedUrl', async (realurl) => {
        try {
            let response = await axios('/shorten?' + new URLSearchParams({
                shorturl: realurl
            }))
            return response.data.message
        } catch (err) {
            console.log(err)
            return err
        }
    }
)

export const setterSlice = createSlice({
    name: "shortened",
    initialState: {
        value: '',
        shortenedvalue: '',
        isLoading: false,
        invalid: false
    },
    reducers: {
        setUrlValue: (state, action) => {
            state.value = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchshortenedUrl.pending, (state, action) => {
            state.shortenedvalue = ''
            state.isLoading = true;
            state.invalid = false;
        })
        .addCase(fetchshortenedUrl.fulfilled, (state, action) => {
            state.shortenedvalue = action.payload;
            state.isLoading = false;
            state.invalid = true;
        })
        .addCase(fetchshortenedUrl.rejected, (state, action) => {
            state.invalid = true
            state.isLoading = false
        })
    }
})

export const { setUrlValue } = setterSlice.actions;
export default setterSlice.reducer;