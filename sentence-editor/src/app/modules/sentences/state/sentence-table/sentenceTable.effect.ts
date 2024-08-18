import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { editSentence, loadAllSentences, setAllSetences } from "./sentenceTable.slice";
import { map, switchMap } from "rxjs";
import { SentencesApiService } from "../../api/sentences-api.service";

@Injectable()
export class SentenceTableEffect {
  constructor(private actions$: Actions, private store : Store, private apiService: SentencesApiService) {}

  loadAllSentences$ = createEffect(()=>
    this.actions$.pipe(
      ofType(loadAllSentences),
      switchMap((action)=> this.apiService.getAllSentences().pipe(
        map(setAllSetences)
      ))
    )
  );

  editSentence$ = createEffect(()=> this.actions$.pipe(
    ofType(editSentence),
    switchMap((action) => this.apiService.editSentence(action.payload).pipe(map(setAllSetences)))

  ))

}