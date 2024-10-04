import {Component, OnInit} from '@angular/core';
import {Shoe} from "../shared/models/user";
import {ShoeListItemComponent} from "../shoe-list-item/shoe-list-item.component";
import {NgForOf} from "@angular/common";
import {ShoeServiceService} from "../../Services/shoe-service.service";

@Component({
  selector: 'app-shoe-list',
  standalone: true,
  imports: [
    ShoeListItemComponent,
    NgForOf
  ],
  templateUrl: './shoe-list.component.html',
  styleUrl: './shoe-list.component.css'
})

export class ShoeListComponent implements OnInit{

  shoeArray: Shoe[] = [];

  constructor(private shoeService: ShoeServiceService) {
  }

  ngOnInit() {
    this.shoeService.getShoes().subscribe({
      next: (data: Shoe[]) => this.shoeArray = data,
      error:err => console.error("Error fetching shoes", err),
      complete:() => console.log("Shoe data fetching complete!")
    })
  }

}




