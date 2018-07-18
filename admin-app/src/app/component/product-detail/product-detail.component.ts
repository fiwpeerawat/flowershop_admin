import { Component, OnInit, ViewChildren, QueryList, Input } from '@angular/core';
import { GetProductDetailService } from '../../services/get-product-detail.service';
declare var $: any;

import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public touchTimenumberProduct = 0;
  public product:Product;
  public groupList:GroupList[];

  @ViewChildren('checkbox') checkbox: QueryList<any>;
  @ViewChildren('detailText') detailText: QueryList<any>;
  @ViewChildren('detailInput') detailInput: QueryList<any>;

  


  constructor(public getdetailPro:GetProductDetailService , public router:ActivatedRoute) { }

  ngOnInit() {
     var PID = this.router.snapshot.paramMap.get('PID')
     var form = new FormData()
     form.append('productID',PID);
      this.getdetailPro.getDetailProduct(form).subscribe( (response) =>{    
         response.map( (res)=>{  
                  res.PROFILE_IMG =  JSON.parse(res.PROFILE_IMG);
                  res.URL =  JSON.parse(res.URL) ;                                             
          })
          this.product = response;       
          console.log( this.product);        
      } )

      this.getdetailPro.getGroupProduct().subscribe( (res)=>{
        this.groupList = res;
      } )
  }

  checkboxClick(index:number){
    let boo:boolean = this.checkbox.toArray()[index].nativeElement.checked
    this.checkbox.forEach( el=>
      el.nativeElement.checked = false
    )
    this.checkbox.toArray()[index].nativeElement.checked =  !!boo;
    this.product[0].PROFILE_IMG = this.product[0].URL[index];
}
  

  Productclick(index: number) {

    if (this.touchTimenumberProduct == 0) {
      this.touchTimenumberProduct = new Date().getTime();
    }
    else {
      if (((new Date().getTime()) - this.touchTimenumberProduct) <= 800) {
        this.detailText.toArray()[index].nativeElement.style.display = "none";
        this.detailInput.toArray()[index].nativeElement.style.display = "block";
        this.detailInput.toArray()[index].nativeElement.value = this.detailText.toArray()[index].nativeElement.innerHTML;
        this.touchTimenumberProduct = 0;
      }
      else {
        this.touchTimenumberProduct = 0;
      }

    }
  }

  confirmChangeProduct() {

    var form = new FormData();  
    form.append('numberProduct' , this.product[0].PID);  
    form.append('nameProduct' , this.product[0].NAME); 
    form.append('detailProduct' , this.product[0].DETAIL); 
    form.append('priceProduct' , this.product[0].PRICE); 
    form.append('groupProduct' , this.product[0].GROUP); 
    form.append('idprofileURL' , this.product[0].PROFILE_IMG.IMGID);
    this.getdetailPro.changeDetailProduct(form).subscribe( (response)=>{
      $('#ModelConfirmeChange').modal('hide');
      console.log(response);
    } )

  }
}

interface Product{
  PID:string;
  NAME:string;
  DETAIL:string;
  PRICE:number;
  GROUP:string;
  DATE:string;
  TIME:string;
  PROFILE_IMG:MYURL[];
  URL:MYURL[];
}
interface MYURL{
  IMGID :number;
  URL:string;
}
interface GroupList {
  GID : number;
  NAME : string;
}
