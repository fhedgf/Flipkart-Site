import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
public product:any=[]
public grandTotal :number=0;
constructor( private cartservice:CartService){}
ngOnInit():void {
  this.cartservice.getproducts().subscribe((res)=>
  {
    this.product=res;
    this.grandTotal=this.cartservice.getTotalPrice();
  })
}
removeitem(item:any)
{
  this.cartservice.removecartitem(item);
}
emptycart()
{
  this.cartservice.removeall();
}
}
