import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducer } from "../reducers/RootReducer";
function saveToLocalStorage(state) {
  try {
    localStorage.setItem("state", JSON.stringify(state));
  } catch (error) {
    console.error(error);
  }
}
function loadFromLocalState() {
  try {
    const state = localStorage.getItem("state");
    if (state === null) return undefined;
    return JSON.parse(state);
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
const storedState = loadFromLocalState();
const AppStore = createStore(
  reducer,
  storedState,
  compose(
    applyMiddleware(thunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);
AppStore.subscribe(() => saveToLocalStorage(AppStore.getState()));
export default AppStore;
