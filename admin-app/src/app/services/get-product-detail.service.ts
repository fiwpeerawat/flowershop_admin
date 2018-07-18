import { Injectable } from '@angular/core';
import {  Http ,Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetProductDetailService {

  constructor(private http:Http) { }

  getDetailProduct(form){
      return this.http.post("https://angsila.cs.buu.ac.th/~57660113/webAPI/get-detail-product.php" , form).pipe(
        map( (res) => res.json()
      ))
  }

  getGroupProduct(){
    return this.http.get('https://angsila.cs.buu.ac.th/~57660113/webAPI/get-group-product.php').pipe(
        map( (res) => res.json() 
      )
    )
   }

   changeDetailProduct(form){
    return this.http.post('https://angsila.cs.buu.ac.th/~57660113/webAPI/chang_detail_product.php' , form).pipe(
        map( (res) => res.json() 
      )
    )
   }

}
