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
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const AppStore = createStore(
  reducer,
  storedState,
  composeEnhancers(applyMiddleware(thunk))
);
AppStore.subscribe(() => saveToLocalStorage(AppStore.getState()));
export default AppStore;
