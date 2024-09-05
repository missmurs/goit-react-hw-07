import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import {
  apiGetAllContacts,
  apiAddContacts,
  apiDeleteContacts,
} from "./contactsOps";
const INITIAL_STATE = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) =>
    builder
      /**
        |============================
        | apiGetAllContact
        |============================
      */
      .addCase(apiGetAllContacts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(apiGetAllContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(apiGetAllContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      /**
        |============================
        | apiDeleteContacts
        |============================
      */
      .addCase(apiDeleteContacts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(apiDeleteContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(apiDeleteContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      /**
        |============================
        | apiAddContacts
        |============================
      */
      .addCase(apiAddContacts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(apiAddContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(apiAddContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const selectContacts = (state) => state.contacts.items;
export const contactsReducer = contactsSlice.reducer;
export const selectFilter = (state) => state.filters;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
