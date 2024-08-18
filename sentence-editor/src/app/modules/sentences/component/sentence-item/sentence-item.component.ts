import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import SenetenceModel from '../../models/senetence.model';

@Component({
  selector: 'sentence-item',
  templateUrl: './sentence-item.component.html',
  styleUrls: ['./sentence-item.component.scss']
})
export class SentenceItemComponent {

      @Input() set item(item: SenetenceModel){
        this.item$.next(item)
      };
      get item(): SenetenceModel{
        return this.item$.value;
      }
    
      @Input() set selected(selected :boolean){
        this.selected$.next(selected)
      };
      
      get selected(): boolean {
        return this.selected$.value;
      }
    
     
      @Output() cancel = new EventEmitter();
      @Output() onClick = new EventEmitter(); 
      @Output() save = new EventEmitter<SenetenceModel>();

      @ViewChild('itemSubject') itemSubject: ElementRef<HTMLInputElement>;
      @ViewChild('itemVerb') itemVerb: ElementRef<HTMLInputElement>;
      @ViewChild('itemObject') itemObject: ElementRef<HTMLInputElement>;

    
      readonly selected$: BehaviorSubject<boolean> = new BehaviorSubject(null);
      readonly item$: BehaviorSubject<SenetenceModel> = new BehaviorSubject(null);
      
      editedSentence: SenetenceModel = null;

      constructor(){}

      ngOnInit():void{
        this.editedSentence = {
          n:this.item.n,
          s:this.item.s,
          v:this.item.v
        };
        
      }
    
      onCancel(): void {
        // this.selected$.next(false);
        this.cancel.emit();   
      }
    
      openEditor($event : Event) :void {
        $event.stopPropagation();
        this.onClick.emit();
        
      }
      onSave():void{
        this.updateSubject();
        this.updateVerb();
        this.updateObject();
        // console.log(this.editedSentence);
        
        this.save.emit(this.editedSentence);
        
      }

      updateSubject(){
        this.editedSentence.s = this.itemSubject.nativeElement.value;
        if(!this.editedSentence.s){
          this.editedSentence.s= this.item.s;
        }
      }
      updateObject(){        
        this.editedSentence.o = this.itemObject.nativeElement.value;
        if(!this.editedSentence.o){
          this.editedSentence.o= this.item.o;
        }
      }
      updateVerb(){
        this.editedSentence.v = this.itemVerb.nativeElement.value;
        if(!this.editedSentence.v){
          this.editedSentence.v= this.item.v;
        }
      }
}
