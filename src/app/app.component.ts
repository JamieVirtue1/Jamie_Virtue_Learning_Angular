import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from "@angular/common";
import {NgIf} from "@angular/common";
import {ShoeListComponent} from "./shoe-list/shoe-list.component";
import {ShoeServiceService} from "./Services/shoe-service.service"
import {Shoe} from "./shared/models/user";
import {ShoeListItemComponent} from "./shoe-list-item/shoe-list-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NgIf, ShoeListComponent, ShoeListItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {

  shoeArray: Shoe | undefined;
  private shoeService: ShoeServiceService;

  constructor(shoeService: ShoeServiceService) {
    this.shoeService = shoeService;
  }

  title = "Jamie's Shoe List";

  selectedShoe: Shoe | undefined;
  ngOnInit(): void {

    this.shoeService.getShoeById(4).subscribe(shoe => {
      this.selectedShoe = shoe;
    });

  //
  // shoe1 : Shoe = {colour: "Red", size: 10, brand: "Jordan", price: 250, isUsed: false, id: 1};
  // shoe2 : Shoe = {colour: "Gray", size: 11, brand: "Nike", price: 170, isUsed: false, id: 2};
  // shoe3 : Shoe = {colour: "Black & White", size: 13, brand: "Adidas", price: 200, isUsed: true, id: 3};
  // shoe4 : Shoe = {colour: "Red", size: 7, brand: "Jordan", price: 120, isUsed: false, id: 4};
  // shoe5 : Shoe = {colour: "Green", size: 9, brand: "Sketchers", price: 60, isUsed: true, id: 5};
  // shoe6 : Shoe = {colour: "White & Blue", size: 10, brand: "Puma", price: 100, isUsed: false, id: 6};
  //
  // shoeList: Shoe[] = [this.shoe1, this.shoe2, this.shoe3, this.shoe4, this.shoe5,this.shoe6]

}}

