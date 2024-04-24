import {
  PayloadAction,
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { fetchUsers } from "../thunks/fetchUsers";
import { User } from "./types";

const usersAdapter = createEntityAdapter<User>();

export const UsersSlice = createSlice({
  name: "users",
  initialState: {
    users: usersAdapter.getInitialState({}),
    loading: false,
  },
  reducers: {
    update: (
      state,
      { payload }: PayloadAction<{ id: number; updated: Partial<User> }>
    ) => {
      usersAdapter.updateOne(state.users, {
        id: payload.id,
        changes: payload.updated,
      });
    },
    remove: (state, { payload }: PayloadAction<number>) => {
      usersAdapter.removeOne(state.users, payload);
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        usersAdapter.setAll(state.users, action.payload);
        state.loading = false;
      })
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.rejected, (_, action) => {
        console.error(action.error);
      }),
});

export const selectUsers = usersAdapter.getSelectors<RootState>(
  (state) => state.UsersReducer.users
);

export const selectLoading = createSelector(
  [(state: RootState) => state.UsersReducer],
  (data) => data.loading
);

export const { update, remove } = UsersSlice.actions;

export default UsersSlice.reducer;
