import { Injectable } from '@angular/core';
import {  Http ,Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetProductService {

  constructor(private http:Http) { }

  getAllProduct(){
      return this.http.get("https://angsila.cs.buu.ac.th/~57660113/webAPI/get-product.php").pipe(
        map( (res) => res.json() 
      ))
  }

  searchProduct(form){
    return this.http.post("https://angsila.cs.buu.ac.th/~57660113/webAPI/search_product.php" , form).pipe(
        map( (res) => res.json() 
      ))
  }

  searchEveryThingProduct(form){
    return this.http.post("https://angsila.cs.buu.ac.th/~57660113/webAPI/search_ev_product.php" , form).pipe(
        map( (res) => res.json() 
      ))
  }
  

}
