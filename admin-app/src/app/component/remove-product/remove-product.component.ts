import { Component, OnInit, ViewChildren, QueryList, Input } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { RemoveProductService } from '../../services/remove-product.service';
import { GetProductService } from '../../services/get-product.service';

@Component({
  selector: 'app-remove-product',
  templateUrl: './remove-product.component.html',
  styleUrls: ['./remove-product.component.css']
})
export class RemoveProductComponent implements OnInit {
 
  public groupList:GroupList[];
  public allProduct:AllProduct[];
  public removeCheck:boolean=false;
  public removeIndex:number=10;
  
  public productID:string = null;
  public productName:string = null;
  public productGroup:string = null;
  public productdate:string = null;

  

  @ViewChildren(ProductItemComponent) alerts: QueryList<ProductItemComponent>

  constructor(private removePro : RemoveProductService , private getProduct : GetProductService) { }

  ngOnInit() {
        this.removePro.getgroup().subscribe( (response)=>{
          this.groupList = response;  
        } )
        this.getProduct.getAllProduct().subscribe( (response)=>{
          this.allProduct = response;         
        } )
   }

  clickItem(PID:any) { 
        var newProduct:AllProduct[]=[];
          for(let i=0 ; i< this.allProduct.length ; i++){
              if(PID !=  this.allProduct[i].PID){
                newProduct.push(this.allProduct[i]);
              }
          }
        this.allProduct = [];
        for(let i=0 ; i< newProduct.length ; i++){      
          this.allProduct.push(newProduct[i]);      
        }
        this.removeProduct(PID);    
  }

  removeProduct(PID){
    var formdata = new FormData();
    formdata.append('removeProduct',PID)
    this.removePro.removeProduct(formdata).subscribe( (response)=>{
      console.log(response)
    } )
  }

  searchClick(){    
    var formdata = new FormData();
    formdata.append('productID',this.productID? this.productID : '999999' );
    formdata.append('productName',this.productName? this.productName : 'null' );
    formdata.append('productGroup',this.productGroup? this.productGroup : 'null');
    formdata.append('productdate',this.productdate? this.productdate : '0000-00-00');   
    this.getProduct.searchProduct(formdata).subscribe( (response)=>{
      this.allProduct=[];
      this.allProduct = response;
    } )

  }




}


interface GroupList {
  GID : number;
  NAME : string;
}

interface AllProduct {
  PID: number;			
	URL: string;
	NAME: string;
	DETAIL: string;
  PRICE: number; 
}

