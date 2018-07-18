import { Component, OnInit } from '@angular/core';
import { GetListOrderService } from '../../services/get-list-order.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-all-list-order',
  templateUrl: './all-list-order.component.html',
  styleUrls: ['./all-list-order.component.css']
})
export class AllListOrderComponent implements OnInit {

  listOrder:any=[];
  constructor(public order:GetListOrderService , public router : Router){ }

  ngOnInit() {
    this.order.getListOrder().subscribe(
      (res) =>{
        this.listOrder = res;
      }
    )
  }

  clickItem(index){
    this.order.setValueIntent(this.listOrder[index].BID)
    console.log(this.listOrder[index].BID)
      this.router.navigate(['/ShowDetailOrder'])
  }
 

}
