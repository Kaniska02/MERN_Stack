import { configureStore } from "@reduxjs/toolkit";

// Define the reducer logic for the counter
const counterLogic = (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      default:
        return state;
    }
  };
  
  // creating a reducer so that when we click on the button submit details the username and
  // email stored is vired in about page
  // store={} - we're  going to store a object
  const storeMyDetailsReducer = (state = {}, action) => {
    switch (action.type) {
      case "saveDetails":
        console.log(state.data);
        return action.data;
        break;
    }
    return state;
  };
// Configure the Redux store
export const myStore = configureStore({
    reducer: {
      counter: counterLogic,
      myDetails: storeMyDetailsReducer
    },
  });
