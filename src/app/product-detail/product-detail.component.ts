import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product:Product = {id:0,name:"", description:"",categoryId:0,quantityPerUnit:"",price:0,unitsInStock:0 ,imageUrl:""};

  constructor(private productService:ProductService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
   this.activatedRoute.params.subscribe(params=>{
     this.getProductById(params["id"])
   })  
  }

  getProductById(id:number){
    this.productService.getProductById(id).subscribe(data=>{
      console.log(data)
      this.product =data
       this.product.imageUrl = data.imageUrl
    })
  }

}