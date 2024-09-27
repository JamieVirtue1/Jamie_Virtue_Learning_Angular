import { Component } from '@angular/core';
import {Shoe} from "../shared/models/user";
import {ShoeListItemComponent} from "../shoe-list-item/shoe-list-item.component";

@Component({
  selector: 'app-shoe-list',
  standalone: true,
  imports: [
    ShoeListItemComponent
  ],
  templateUrl: './shoe-list.component.html',
  styleUrl: './shoe-list.component.css'
})
export class ShoeListComponent {
  shoe1 : Shoe = {colour: "Red", size: 10, brand: "Jordan", price: 250, isUsed: false};
  shoe2 : Shoe = {colour: "Gray", size: 11, brand: "Nike", price: 170, isUsed: false};
  shoe3 : Shoe = {colour: "Black & White", size: 13, brand: "Adidas", price: 200, isUsed: true};
  shoe4 : Shoe = {colour: "Red", size: 7, brand: "Jordan", price: 120, isUsed: false};
  shoe5 : Shoe = {colour: "Green", size: 9, brand: "Sketchers", price: 60, isUsed: true};
  shoe6 : Shoe = {colour: "White & Blue", size: 10, brand: "Puma", price: 100, isUsed: false};

  shoeList: Shoe[] = [this.shoe1, this.shoe2, this.shoe3, this.shoe4, this.shoe5,this.shoe6]
}



