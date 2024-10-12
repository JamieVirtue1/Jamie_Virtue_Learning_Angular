import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {CommonModule} from "@angular/common";
import {NgIf} from "@angular/common";
import {ShoeListComponent} from "./shoe-list/shoe-list.component";
import {ShoeServiceService} from "./Services/shoe-service.service"
import {Shoe} from "./shared/models/user";
import {ShoeListItemComponent} from "./shoe-list-item/shoe-list-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NgIf, ShoeListComponent, ShoeListItemComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  private shoeService: ShoeServiceService;

  constructor(shoeService: ShoeServiceService, public router: Router) {
    this.shoeService = shoeService;
  }

  title = "Jamie's Shoe List";

  selectedShoe: Shoe | undefined;
  ngOnInit(): void {

    this.shoeService.getShoeById(4).subscribe(shoe => {
      this.selectedShoe = shoe;
    });

}}

