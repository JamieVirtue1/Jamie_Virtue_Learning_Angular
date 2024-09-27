import {Component, Input} from '@angular/core';
import {Shoe} from "../shared/models/user";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-shoe-list-item',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './shoe-list-item.component.html',
  styleUrl: './shoe-list-item.component.css'
})
export class ShoeListItemComponent {

  @Input() shoeListItem?:Shoe;
  @Input() background?: string;
}
