import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import client from '../../../infrastructure/utils/client'

export const getProducts = createAsyncThunk("products/getData",async(arg,{rejectWithValue})=>{
    try {
        const products = await client.fetch(`*[_type == "product"]`)
        return products
       
    } catch (error) {
        console.log(error.message)
        rejectWithValue(error.message)
    }
})

export const productSlice = createSlice({
    name:'products',
    initialState:{
        data:[],
        isSuccess:false,
        message:"",
        loading:''
    },

    reducers:{},
    extraReducers:{
        [getProducts.pending]:(state,{payload})=>{
            state.loading=true;
        },
        [getProducts.fulfilled]:(state,{payload})=>{
            state.loading=false;
            state.data=payload;
            state.isSuccess=true
        },
        [getProducts.rejected]:(state,{payload})=>{
            state.message=payload;
            state.loading=false;
            state.isSuccess=false
        }
    }
})


export const {fetchProducts} = productSlice.actions

export default productSlice.reducer