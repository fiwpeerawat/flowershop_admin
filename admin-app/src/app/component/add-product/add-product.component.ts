import { Component, OnInit, ViewChild, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { AddProductService } from '../../services/add-product.service';
declare var $:any;


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  imgFilestruc: any[] = [];
  imgFilestruc_Upload: any[] = [];
  checkboxstruc: any[] = [];
  nameProduct: string;
  detailProduct: string;
  priceProduct: string;
  groupProduct: string;
  select_imh_Imag: string;

  public groupList:GroupList[];

  @ViewChild('imgFile') imgFile: ElementRef;
  @ViewChild('imgshow') imgshow: ElementRef;
  @ViewChildren('checkbox') checkbox: QueryList<any>;

  constructor(public addPro: AddProductService) {
    this.select_imh_Imag='0';
   }

  ngOnInit() {
    this.addPro.getGroupProduct().subscribe((response) => {
      this.groupList = response;
      this.groupProduct = this.groupList[0].NAME;       
    })
    

  }

  checkboxClick(index: string) {
    let boo: boolean = this.checkbox.toArray()[index].nativeElement.checked
    this.checkbox.forEach(el =>{
      el.nativeElement.checked = false;
      this.select_imh_Imag = '0';
    }      
    )
    this.checkbox.toArray()[index].nativeElement.checked = !!boo;
    if(this.checkbox.toArray()[index].nativeElement.checked)
       this.select_imh_Imag = index;
    else{
      this.select_imh_Imag = '0';
    }
  }

  addImg() {
    if (this.imgFile.nativeElement.files && this.imgFile.nativeElement.files[0]) {
      this.imgFilestruc_Upload.push(this.imgFile.nativeElement.files[0])
      var reader = new FileReader();
      reader.onload = (event: any) => {
        var result = event.target.result;
        this.imgFilestruc.push(result)
      }
      reader.readAsDataURL(this.imgFile.nativeElement.files[0]);
    }
   
  }

  confirmAddProduct() {
    var formData = new FormData()
    for (let i = 0; i < this.imgFilestruc_Upload.length; i++) {
      formData.append('fileImg' + i, this.imgFilestruc_Upload[i]);
    }
    formData.append('nameProduct', this.nameProduct);
    formData.append('detailProduct', this.detailProduct);
    formData.append('priceProduct', this.priceProduct);
    formData.append('groupProduct', this.groupProduct);
    formData.append('select_img_Imag', this.select_imh_Imag);
    formData.append('count_img', String(this.imgFilestruc_Upload.length));

    this.addPro.addProduct(formData).subscribe((response) => {
      console.log(response)
      $('#ModalCenter').modal('hide');
      this.clearData();
    })
  }


  clearData(){
    this.imgFile.nativeElement.value = null;
    this.imgFilestruc = [];
    this.imgFilestruc_Upload = [];
    this.checkboxstruc= [];
    this.nameProduct="";
    this.detailProduct="";
    this.priceProduct="";
    this.groupProduct="";
    this.select_imh_Imag="";
  }


}
interface GroupList {
    GID : number;
    NAME : string;
}
