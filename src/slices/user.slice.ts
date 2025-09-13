import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IUser {
  "id": string,
  "email": string,
  "first_name": string,
  "last_name": string,
  "address": string,
  "city": string,
  "country": string,
  "state": string,
  "role": string,
}

export interface IMeta {
  status: string
}

export interface UserState {
  user: null | IUser,
  meta: IMeta
}

const initialState: UserState = {
  user: null,
  meta: {
    status: 'APPROVED'
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload
    },
    setStatusMeta: (state, action: PayloadAction<string>) => {
      state.meta = {
        ...state.meta,
        status: action.payload
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUser, setStatusMeta } = userSlice.actions

export default userSlice.reducer