import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
public cartItem:any=[]
public productlist=new BehaviorSubject<any>([])
  constructor() { }
  getproducts()
  {
   return this.productlist.asObservable();
  }
  setproducts(product:any){
  this.cartItem.push(...product);
    this.productlist.next(product);
  }
  addtocart(product:any)
  {
     this.cartItem.push(product);
     this.productlist.next(this.cartItem)
     
      this.getTotalPrice();
      console.log(this.cartItem)

  }
  getTotalPrice():number
  {
    let grandTotal=0;
    this.cartItem.map((a:any)=>
    {
      grandTotal+=a.total;
    }
    )
    return grandTotal
  }
  removecartitem(product:any)
  {
    this.cartItem.map((a:any,index:any)=>
    {
      if(product.id==a.id){
        this.cartItem.splice(index,1)

      }
    })
    this.productlist.next(this.cartItem);
  }
  removeall()
  {
   this.cartItem=[]
   this.productlist.next(this.cartItem)
   
  }
 

}
