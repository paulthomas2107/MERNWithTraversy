import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Get user from local storage
const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};
