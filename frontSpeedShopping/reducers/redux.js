import { configureStore, ConfigureStore, createSlice } from "@reduxjs/toolkit";

// **************** SLICE  save user **************************** 
const itiSlice = createSlice({

name: 'itineraire',
initialState: {}, 

reducers: {
  setItineraire : (state, action) => {

var newItineraire = {

    arrive: action.payload.arrive,
    depart: action.payload.depart,
    besoin: action.payload.besoin,
    horaire: action.payload.horaire,
    transport: action.payload.transport,
}


return newItineraire

  }

 
}
}) ;

//************** EXPORT *******************
export const store = configureStore({
  reducer: {
    saveIti:itiSlice.reducer ,
  }
})