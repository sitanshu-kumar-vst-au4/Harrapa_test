import { createStore } from "redux";

let initialState = {
 
};

function appReducerFunction(state = initialState, action) {
  let stateCopy = JSON.parse(JSON.stringify(state));
  console.log(action.payload);
  switch (action.type) {
    case " ":
      stateCopy.tables = action.payload;
      return stateCopy;
     
    default:
      return stateCopy;
  }
}

// 4. Create a package - (state, dispatch) - store - there should be a way to create this store - already present in redux
const store = createStore(appReducerFunction);
export default store;
