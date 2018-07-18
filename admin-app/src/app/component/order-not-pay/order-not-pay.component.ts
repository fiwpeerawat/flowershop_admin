import { Component, OnInit } from '@angular/core';
import { GetListOrderService } from '../../services/get-list-order.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-order-not-pay',
  templateUrl: './order-not-pay.component.html',
  styleUrls: ['./order-not-pay.component.css']
})
export class OrderNotPayComponent implements OnInit {

  listorder:any=[];
  constructor( public order : GetListOrderService , public router : Router ) { }
  ngOnInit() {
      this.order.getOrderNotPay().subscribe(
        (res) =>{
          this.listorder = res;
        }
      )
  }

  clickItem(index){
    this.order.setValueIntent(this.listorder[index].BID)  
      this.router.navigate(['/ShowDetailOrder'])
  }

}
