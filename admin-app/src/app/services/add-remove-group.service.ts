import { Injectable } from '@angular/core';
import {  Http ,Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AddRemoveGroupService {

  constructor(private http:Http) { }

  getgroup(){
    return this.http.get('https://angsila.cs.buu.ac.th/~57660113/webAPI/get-group-product.php').pipe(
      map( (res) => res.json() 
    ))
  }

  addGroup(formData:any){   
    return this.http.post('https://angsila.cs.buu.ac.th/~57660113/webAPI/add-group-product.php',formData).pipe(
      map( (res) => res.json() 
    ))
  }

  removeGroup(formData:any){   
    return this.http.post('https://angsila.cs.buu.ac.th/~57660113/webAPI/remove-group-product.php',formData).pipe(
      map( (res) => res.json() 
    ))
  }


}
