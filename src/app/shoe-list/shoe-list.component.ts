import {Component, OnInit} from '@angular/core';
import {Shoe} from "../shared/models/user";
import {ShoeListItemComponent} from "../shoe-list-item/shoe-list-item.component";
import {CurrencyPipe, NgForOf, NgStyle} from "@angular/common";
import {ShoeServiceService} from "../Services/shoe-service.service";
import {Router, RouterLink} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconTestingModule} from "@angular/material/icon/testing";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-shoe-list',
  standalone: true,
  imports: [
    ShoeListItemComponent,
    NgForOf,
    RouterLink,
    CurrencyPipe,
    MatCardModule,
    MatButtonModule,
    MatIconTestingModule,
    MatGridListModule,
    NgStyle,
    MatListModule,
    MatIconModule
  ],
  templateUrl: './shoe-list.component.html',
  styleUrl: './shoe-list.component.css'
})

export class ShoeListComponent implements OnInit{

  shoeArray: Shoe[] = [];

  constructor(private shoeService: ShoeServiceService, public router: Router) {
  }
  ngOnInit() {
    this.shoeService.getShoes().subscribe({
      next: (data: Shoe[]) => this.shoeArray = data,
      error:err => console.error("Error fetching shoes", err),
      complete:() => console.log("Shoe data fetching complete!")
    })
  }

}




