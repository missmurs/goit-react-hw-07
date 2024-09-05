import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const apiGetAllContacts = createAsyncThunk(
  "contacts/getAll",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get(
        "https://66d721f7006bfbe2e64ff333.mockapi.io/contact"
      );
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiDeleteContacts = createAsyncThunk(
  "contacts/delete",
  async (id, thunkApi) => {
    try {
      const { data } = await axios.delete(
        `https://66d721f7006bfbe2e64ff333.mockapi.io/contact/${id}`
      );
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiAddContacts = createAsyncThunk(
  "contacts/add",
  async (contacts, thunkApi) => {
    try {
      const { data } = await axios.post(
        `https://66d721f7006bfbe2e64ff333.mockapi.io/contact`,
        contacts
      );
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
