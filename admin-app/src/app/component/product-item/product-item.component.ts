import { Component, OnInit , Input ,Output ,EventEmitter  } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() obj:any; 
  @Input() remove:boolean;
  @Output() indexRemove: EventEmitter<number> = new EventEmitter();

  
  constructor(public router: Router) { }

  ngOnInit() {
  }


  gotoLink(){  
    this.router.navigate(['ProductDetail',this.obj.PID]);
  }
  removeClick(){ 
    this.indexRemove.emit(this.obj.PID);   
  }

}
