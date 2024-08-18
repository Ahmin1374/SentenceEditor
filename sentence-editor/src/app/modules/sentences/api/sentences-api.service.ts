import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import SenetenceModel from "../models/senetence.model";

@Injectable()
export class SentencesApiService {
 
  readonly apiURL= "http://localhost:3000";

  constructor(private http: HttpClient) {}

  getAllSentences(): Observable<SenetenceModel[]>{
    
    return this.http.get<SenetenceModel[]>(this.apiURL+'/allsetences')
  } 
  
  editSentence(sentence: SenetenceModel): Observable<SenetenceModel[]> {
    return this.http.post<SenetenceModel[]>(this.apiURL+'/editsentence',sentence);
  }
}
