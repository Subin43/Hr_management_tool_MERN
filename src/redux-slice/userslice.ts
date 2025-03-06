import { createSlice, PayloadAction } from "@reduxjs/toolkit";
 export interface User {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    birthDate: string;
    login: Login;
    address: Address;
    phone: string;
    website: string;
    company: Company;
  }
  interface Login {
    uuid: string;
    username: string;
    password: string;
    md5: string;
    sha1: string;
    registered: string;
  }

   interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  }
  
   interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
  }
  interface UserState {
    user : User | null 
  }

const  initialState : UserState = {
    user : null,
}

const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        setUser : (state, action : PayloadAction<User>) => {
            state.user = action.payload;
        },
        cleanUser : (state) => {
            state.user = null
        }
    }
})
export const {setUser, cleanUser} = userSlice.actions; 
export default userSlice.reducer;