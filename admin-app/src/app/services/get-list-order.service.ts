import { Injectable } from '@angular/core';
import { Http  } from '@angular/http'
import { Observable } from 'rxjs';
import { map  } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GetListOrderService {

  intentValue:string;

  constructor(private http:Http) { }

  getListOrder(){
    return this.http.post('https://angsila.cs.buu.ac.th/~57660113/webAPI/gat-list-order.php', '').pipe(
      map( (res)=> res.json() )
    )
  }

  getOrderNotPay(){
    return this.http.post('https://angsila.cs.buu.ac.th/~57660113/webAPI/list-orderNot-pay.php' , '').pipe( map( (res)=>res.json() ) )
  }
  getOrderNotApprove(){
    return this.http.post('https://angsila.cs.buu.ac.th/~57660113/webAPI/get-list-order-not-approve.php' , '').pipe( map( (res)=>res.json() ) )
  }


  getOrderDetail(): Observable<any> {
    var form = new FormData();
    form.append('BID', this.intentValue);
    return this.http.post('https://angsila.cs.buu.ac.th/~57660113/webAPI/get-order-detail.php', form).pipe(
      map( (res)=> res.json() )
    )
  }

  change_state_approve(){
    var form = new FormData();
    form.append('BID', this.intentValue);
    return this.http.post('https://angsila.cs.buu.ac.th/~57660113/webAPI/change-state-approve.php', form)
  }

  setValueIntent(value){
    this.intentValue = value
 
  }

  getPaymentDeatil(){

    var form = new FormData();
    form.append('BID', this.intentValue);
    return this.http.post('https://angsila.cs.buu.ac.th/~57660113/webAPI/get-payment-deatil.php', form).pipe(
      map( (res)=> res.json() )
    )

  }




}
