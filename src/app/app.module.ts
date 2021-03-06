import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CartComponent } from './cart/cart.component';
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './login/login.component';
import { NaviLoginComponent } from './navi-login/navi-login.component';
import { NaviUserInfoComponent } from './navi-user-info/navi-user-info.component';
import { NaviComponent } from './navi/navi.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FilterPipe } from './pipes/filter.pipe';
import { TranslatePipe } from './pipes/translate.pipe';
import { VatPipe } from './pipes/vat.pipe';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    ProductDetailComponent,
    NotFoundComponent,
    CartComponent,
    CartDetailComponent,
    VatPipe,
    FilterPipe,
    TranslatePipe,
    ProductAddComponent,
    LoginComponent,
    NaviLoginComponent,
    NaviUserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ positionClass: "toast-top-right" })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
