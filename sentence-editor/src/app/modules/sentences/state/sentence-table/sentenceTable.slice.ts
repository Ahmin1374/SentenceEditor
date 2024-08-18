import { createSlice } from "@reduxjs/toolkit";
import SenetenceModel from "../../models/senetence.model";
import { FeatureState } from "../feature.state";
import { createSelector } from "@ngrx/store";
import featureSelector from "../feature.selector";

export interface SentenceTableState {
    allSetences : SenetenceModel[];
    
  }

export const initialState: SentenceTableState = {
    allSetences: []    
  };
  

export const sentenceTableSlice = createSlice({
    name: 'sentenceTable',
    initialState: initialState,
    reducers: {
 
      loadAllSentences: (state: SentenceTableState ) => state,
      setAllSetences: (state: SentenceTableState, {payload}:{payload:SenetenceModel[]} ) => {state.allSetences = payload},
      editSentence: (state: SentenceTableState, {}:{payload:SenetenceModel}) => state 

     }
  });

export const sentenceTableCallback = (featureState:FeatureState): SentenceTableState => featureState.sentenceTable;
export const sentenceTableSelector = createSelector(featureSelector,sentenceTableCallback);


export const allSetencesSelectorCallback = (sentenceTableState: SentenceTableState): SenetenceModel[] => sentenceTableState.allSetences;
export const allSetencesSelector = createSelector(sentenceTableSelector,allSetencesSelectorCallback);

export default sentenceTableSlice.reducer;
export const {loadAllSentences,setAllSetences,editSentence} = sentenceTableSlice.actions;