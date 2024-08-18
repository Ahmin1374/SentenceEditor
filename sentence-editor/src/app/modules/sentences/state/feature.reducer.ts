
import { combineReducers } from "@ngrx/store";
import { FeatureState } from "./feature.state";
import  sentenceTableSlice from "./sentence-table/sentenceTable.slice";

export default combineReducers<FeatureState>({
    sentenceTable: sentenceTableSlice
  });
  