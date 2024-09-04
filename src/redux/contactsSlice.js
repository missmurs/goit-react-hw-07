import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const apiGetAllContacts = createAsyncThunk(
  "contacts/getAll",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get(
        "https://66d721f7006bfbe2e64ff333.mockapi.io/contact"
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  contacts: {
    items: [],
  },
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  reducers: {
    addContacts: (state, action) => {
      state.contacts.items.push(action.payload);
    },
    deleteContacts: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        (item) => item.id !== action.payload
      );
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(apiGetAllContacts.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(apiGetAllContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(apiGetAllContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { addContacts, deleteContacts } = contactsSlice.actions;
export const selectContacts = (state) => state.contacts.contacts.items;
export const contactsReducer = contactsSlice.reducer;
