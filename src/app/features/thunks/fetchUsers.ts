import { createAsyncThunk } from "@reduxjs/toolkit";

export type UserPayload = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async (): Promise<UserPayload[]> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data.slice(0, 6);
  }
);
