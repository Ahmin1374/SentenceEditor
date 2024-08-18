import { Component } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';
import SenetenceModel from '../../models/senetence.model';
import { SetencesFacadeService } from '../../sentences-facade.service';

@Component({
  selector: 'sentence-table',
  templateUrl: './sentence-table.component.html',
  styleUrls: ['./sentence-table.component.scss']
})
export class SentenceTableComponent {

  readonly  setencesData$: Observable<SenetenceModel[]>;

  // readonly sdata$: Observable<senetenceModel[]> = of(dummyData);
  private  currentSentenceIDToEdit= new BehaviorSubject<number>(-1);
  readonly currentSentenceIDToEdit$:Observable<number> = this.currentSentenceIDToEdit.asObservable();
  curentEditSentence : SenetenceModel = null;
  
  constructor(private facade: SetencesFacadeService){
    this.facade.initSetenceTable();
    this.setencesData$ = this.facade.getSentencesData();
  }

  startEdit($event,sentenceID:number){
    
    this.currentSentenceIDToEdit.next(sentenceID);
  }
  OnCancelEdit(){
    this.currentSentenceIDToEdit.next(-1);
  }

  onSave(sentence):void{    
    this.facade.editSentence(sentence);
    this.currentSentenceIDToEdit.next(-1);
  }
}
