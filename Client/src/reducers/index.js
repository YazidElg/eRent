import searchreducer from "./search";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  search: searchreducer,
});

export default allReducers;
