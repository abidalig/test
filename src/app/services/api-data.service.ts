import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor ( private httpdata: HttpClient ) { }

  url = "https://jsonplaceholder.typicode.com/posts";
  
  //memberData():Observable<[]>{
  //return this.httpdata.get<[]>(this.url);
  memberData()
  {
      return this.httpdata.get<[]>(this.url);
  }
  saveUsers(data:any)
  {
   return this.httpdata.post(this.url,data);

  }

  userData()
  {
    return [
    {name:'abd', email:'ab@gamil.com'},
    {name:'kjh', email:'ab@gamil.com'},
    {name:'xza', email:'ab@gamil.com'}
    ]
  } 
}
