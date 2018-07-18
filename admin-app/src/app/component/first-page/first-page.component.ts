import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
declare var $: any;

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  @ViewChild('sidenavcontainer') sidenavcontainer: ElementRef;
  @ViewChild('sidenav') sidenav: ElementRef;
  btnToggle: boolean = false;
  _ifmath: boolean = false;
  size_old: any = 0;
  select_menue: string = null;
  constructor(public auth: AuthService) { }

  ngOnInit() {
    $(window).resize(function () {
      if (window.matchMedia('(min-width: 993px)').matches) {
        $('.sidenav').css('width', '250px');
        $('.sidenav-container').css('width', '0px')
        $('.sidenav-container').css('margin-left', '0px')
        $('.sidenav-container').css("background-color", "rgba(0,0,0,0)");
        $('.sidenav').css("box-shadow", "0px 0px 15px 2px  rgb(82, 82, 82)");
        $('.main').css("margin-left", "250px")
      }
      else {
        $('.sidenav').css('width', '0px');
        $('.sidenav').css("box-shadow", "0 0 0 0");
        $('.sidenav-container').css('margin-left', '0px')
        $('.sidenav-container').css("background-color", "rgba(0,0,0,0)");
        $('.main').css("margin-left", "0px")
      }
    });
   
    

  }


  clickBtntoggler() {

    if (!this.btnToggle) {
      this.sidenav.nativeElement.style.width = "250px"
      this.sidenav.nativeElement.style.boxShadow = "0px 0px 15px 2px  rgb(82, 82, 82)"
      this.sidenavcontainer.nativeElement.style.width = "100%"
      this.sidenavcontainer.nativeElement.style.marginLeft = "250px";
      this.sidenavcontainer.nativeElement.style.backgroundColor = "rgba(0,0,0,0.6)";
      this.btnToggle = true;
    }
    else {
      this.sidenav.nativeElement.style.width = "0"
      this.sidenav.nativeElement.style.boxShadow = "0 0 0 0"
      this.sidenavcontainer.nativeElement.style.width = "0"
      this.sidenavcontainer.nativeElement.style.marginLeft = "0"
      this.sidenavcontainer.nativeElement.style.backgroundColor = "rgba(0,0,0,0)"

      this.btnToggle = false;
    }
  }

  sidenavcontainerClick() {
    this.clickBtntoggler();
  }


  menueClick(value: string) {
    
    if( this.select_menue == value){
      this.select_menue = null;
    }
    else  this.select_menue = value;
    
  }
  singout(){
    this.auth.signOut();
  }


}



