import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { allSetencesSelector, editSentence, loadAllSentences } from "./state/sentence-table/sentenceTable.slice";
import { Observable } from "rxjs";
import SenetenceModel from "./models/senetence.model";


@Injectable()
export class SetencesFacadeService {
  
 
  constructor(private store: Store) {}

   initSetenceTable(): void {
    this.store.dispatch(loadAllSentences())
  }

   getSentencesData():Observable<SenetenceModel[]>{
    return this.store.select(allSetencesSelector)
   }

   editSentence(sentence: SenetenceModel):void {
        return this.store.dispatch(editSentence(sentence));
   }
}