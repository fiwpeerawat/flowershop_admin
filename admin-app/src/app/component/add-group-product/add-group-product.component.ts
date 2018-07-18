import { Component, OnInit ,ElementRef , ViewChild } from '@angular/core';
import { AddRemoveGroupService } from '../../services/add-remove-group.service';

@Component({
  selector: 'app-add-group-product',
  templateUrl: './add-group-product.component.html',
  styleUrls: ['./add-group-product.component.css']
})
export class AddGroupProductComponent implements OnInit {
  @ViewChild('addProductID') addProductID:ElementRef;
  @ViewChild('removeProductID') removeProductID:ElementRef;
  public groupList:GroupList[];

  constructor(public addRemoveSv :AddRemoveGroupService) { }

  ngOnInit() {
 
    this.addRemoveSv.getgroup().subscribe( (response)=>{
            this.groupList = response;      
          })
    }
  addGroup(){     
    var formData = new FormData();
    formData.append('addProduct', this.addProductID.nativeElement.value);
    this.addRemoveSv.addGroup(formData).subscribe( (response)=>{      
         console.log(response)
      }
    )
  }
  removeGroup(){
    var formData = new FormData();
    formData.append('removeProduct', this.removeProductID.nativeElement.value);
    this.addRemoveSv.removeGroup(formData).subscribe( (response)=>{      
         console.log(response)
      }
    )
  }

}

interface GroupList {
  GID : number;
  NAME : string;
}

