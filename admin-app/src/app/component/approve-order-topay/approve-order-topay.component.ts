import { Component, OnInit } from '@angular/core';
import { GetListOrderService } from '../../services/get-list-order.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-approve-order-topay',
  templateUrl: './approve-order-topay.component.html',
  styleUrls: ['./approve-order-topay.component.css']
})
export class ApproveOrderTopayComponent implements OnInit {

  list_order:any='';
  constructor(public listOrder : GetListOrderService,
              public router : Router) { }

  ngOnInit() {

    this.listOrder.getOrderNotApprove().subscribe(
      (res)=>{
        this.list_order = res;
      }
    )
  }

  clickItem(index){
    this.listOrder.setValueIntent(this.list_order[index].BID)  
      this.router.navigate(['/ShowDetailOrder'])
  }



}
