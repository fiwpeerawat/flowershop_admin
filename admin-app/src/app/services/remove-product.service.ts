import { Injectable } from '@angular/core';
import {  Http ,Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RemoveProductService {

  constructor(private http:Http) { }

  getgroup(){
    return this.http.get('https://angsila.cs.buu.ac.th/~57660113/webAPI/get-group-product.php').pipe(
      map( (res) => res.json() 
    ))
  }

  removeProduct(formdata:any){
    return this.http.post('https://angsila.cs.buu.ac.th/~57660113/webAPI/remove-product.php' , formdata).pipe(
      map( (res) => res.json() 
    ))
  }

}
