import { Injectable } from '@angular/core';
import {  Http ,Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {
  headers = new Headers({ 'Content-Type': 'application/form-data' });
  options = new RequestOptions({ headers: this.headers });
  constructor(private http:Http) { }

  getGroupProduct(){
    return this.http.get('https://angsila.cs.buu.ac.th/~57660113/webAPI/get-group-product.php').pipe(
        map( (res) => res.json() 
      )
    )
   }
  

  addProduct(formData :FormData){      
      return this.http.post('https://angsila.cs.buu.ac.th/~57660113/webAPI/add-product-api.php', formData).pipe(
        map( (res) => res.json() 
      )
    )
  }
}
