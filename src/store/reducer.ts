import { combineReducers } from "@reduxjs/toolkit";

import { sortObjKeysAlphabetically } from "../utils/sort-object-keys";
import { blogReducer } from "./slices/blog-slice";

const reducers = { blogReducer };

const sortedReducers = sortObjKeysAlphabetically(reducers);

export const rootReducer = combineReducers(sortedReducers);

export type RootState = ReturnType<typeof rootReducer>;
