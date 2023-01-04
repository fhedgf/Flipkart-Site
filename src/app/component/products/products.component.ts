import { Component} from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  public productlist: any;
constructor(private api:ApiService, private cartservice:CartService){}
ngOnInit():void
{
this.api.getproduct().subscribe((res)=>
{
  this.productlist=res
  this.productlist.forEach((a:any)=>{
    Object.assign(a,{quantity:1,total:a.price});
  });
})

}
addtoCart(item:any){
  this.cartservice.addtocart(item);
  

}

}
