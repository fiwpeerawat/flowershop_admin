import { Component, OnInit } from '@angular/core';
import { GetListOrderService } from '../../services/get-list-order.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-show-detail-order',
  templateUrl: './show-detail-order.component.html',
  styleUrls: ['./show-detail-order.component.css']
})
export class ShowDetailOrderComponent implements OnInit {

  orderDetail: any = '';
  orderProduct: any = '';
  paymentDeatil: any = '';
  constructor(public order: GetListOrderService , public router : Router) { }

  ngOnInit() {
    this.order.getOrderDetail().subscribe(
      (res) => {
        this.orderDetail = res[0];
        this.orderProduct = res[1];
        console.log( this.orderDetail)      
        if(this.orderDetail == '' ||  this.orderProduct =='' ||  !this.orderDetail || !this.orderProduct )
          this.router.navigate(['/'])         
      }
    )
  }

  gotoLink(i){  
    this.router.navigate(['ProductDetail',this.orderProduct[i].PID]);
  }

  change_state_approve() {
    console.log('ok')
    this.order.change_state_approve().subscribe(
      () => {
        this.order.getOrderDetail().subscribe(
          (res) => {
            this.orderDetail = res[0];
            this.orderProduct = res[1];
          })
      }
    )
  }


  showPaymentDeatil(){
    this.order.getPaymentDeatil().subscribe(
      (res)=>{ 
        this.paymentDeatil =res;
      }
    )
  }


}
