import { Component, OnInit } from '@angular/core';
import { GetProductService } from '../../services/get-product.service';

declare var $: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  public inputsearch:any;
  public allProduct:AllProduct[];

  constructor(private getProduct:GetProductService) { }

  ngOnInit() {
    $('.header-body').width( $('.header').width() );     
    $( window ).resize(function() {
      $('.header-body').width( $('.header').width() );         
    });

    this.getProduct.getAllProduct().subscribe( (response)=>{
      this.allProduct = response;         
    } )
  }
  timeinputChange:any

  searchClick(value){
    clearTimeout(this.timeinputChange);
    this.timeinputChange = setTimeout(()=>{   
      var form = new FormData;
    form.append('everything',value);
    this.getProduct.searchEveryThingProduct(form).subscribe( (response)=>{
   
      this.allProduct = response;  
    })
    }, 1500);

    
    
  }
  
}

interface AllProduct {
  PID: number;			
	URL: string;
	NAME: string;
	DETAIL: string;
  PRICE: number; 
}
