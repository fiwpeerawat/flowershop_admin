import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { RemoveProductComponent } from './component/remove-product/remove-product.component';
import { AddGroupProductComponent } from './component/add-group-product/add-group-product.component';
import { AllListOrderComponent } from './component/all-list-order/all-list-order.component';
import { OrderNotPayComponent } from './component/order-not-pay/order-not-pay.component';
import { ApproveOrderTopayComponent } from './component/approve-order-topay/approve-order-topay.component';
import { ProductItemComponent } from './component/product-item/product-item.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { ShowDetailOrderComponent } from './component/show-detail-order/show-detail-order.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component'
import { LoginPageComponent } from './component/login-page/login-page.component';
import { FirstPageComponent } from './component/first-page/first-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';



// Service
import { AuthService } from './services/auth.service';
import { AddProductService } from './services/add-product.service';
import { AddRemoveGroupService } from './services/add-remove-group.service';
import { RemoveProductService } from './services/remove-product.service';
import { GetProductService } from './services/get-product.service';
import { GetListOrderService } from './services/get-list-order.service';

// Guard
import { AuthGuard } from './guards/auth.guard';



// Config Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyDYvKNCPe46eJddXZ4XU0yoCMqxQzy38VI",
  authDomain: "flower-admon.firebaseapp.com",
  databaseURL: "https://flower-admon.firebaseio.com",
  projectId: "flower-admon",
  storageBucket: "flower-admon.appspot.com",
  messagingSenderId: "515684120081"
};

const appRoutes: Routes = [
  { path: "", component: HomePageComponent, canActivate: [AuthGuard] },
  { path: "AddProduct", component: AddProductComponent, canActivate: [AuthGuard] },
  { path: "RemoveProduct", component: RemoveProductComponent, canActivate: [AuthGuard] },
  { path: "AddRemoveGroup", component: AddGroupProductComponent, canActivate: [AuthGuard] },
  { path: "AllListOrder", component: AllListOrderComponent, canActivate: [AuthGuard] },
  { path: "OrderNotPay", component: OrderNotPayComponent, canActivate: [AuthGuard] },
  { path: "ApproveOrder", component: ApproveOrderTopayComponent, canActivate: [AuthGuard] },
  { path: "ShowDetailOrder", component: ShowDetailOrderComponent, canActivate: [AuthGuard] },
  { path: "ProductDetail/:PID", component: ProductDetailComponent, canActivate: [AuthGuard] },
  { path: "Login", component: LoginPageComponent },



];

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    RemoveProductComponent,
    AddGroupProductComponent,
    AllListOrderComponent,
    OrderNotPayComponent,
    ApproveOrderTopayComponent,
    ProductItemComponent,
    HomePageComponent,
    ShowDetailOrderComponent,
    ProductDetailComponent,
    LoginPageComponent,
    FirstPageComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,    
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(appRoutes),
    HttpModule,

  ],
  providers: [
    AuthService,
    AngularFireDatabase,
    AuthGuard,
    AddProductService,
    AddRemoveGroupService,
    RemoveProductService,
    GetProductService,
    GetListOrderService,
   
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
