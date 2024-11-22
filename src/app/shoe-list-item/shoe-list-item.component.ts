import {Component, Input} from '@angular/core';
import {Shoe} from "../shared/models/user";
import {CurrencyPipe, DecimalPipe, NgStyle, UpperCasePipe} from "@angular/common";
import {ShoeServiceService} from "../Services/shoe-service.service";
import {shoeArray} from "../../data/mock-content";
import {ShoeListComponent} from "../shoe-list/shoe-list.component";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {BooleanPipe} from "../pipes/boolean.pipe";
import {DisplayColourPipe} from "../pipes/display-colour.pipe";
import {HoverHighlightDirective} from "../Directives/hover-highlight.directive";


@Component({
  selector: 'app-shoe-list-item',
  standalone: true,
  imports: [
    NgStyle,
    RouterLinkActive,
    RouterOutlet,
    RouterLink,
    CurrencyPipe,
    UpperCasePipe,
    DecimalPipe,
    BooleanPipe,
    DisplayColourPipe,
    DisplayColourPipe,
    HoverHighlightDirective
  ],
  templateUrl: './shoe-list-item.component.html',
  styleUrl: './shoe-list-item.component.css'
})
export class ShoeListItemComponent {

  //inputs used by HTML tag
  @Input() shoeListItem?:Shoe;
  @Input() background?: string;

  protected readonly ShoeServiceService = ShoeServiceService;
  protected readonly  = shoeArray;
  protected readonly ShoeListComponent = ShoeListComponent;

  constructor(private shoeService: ShoeServiceService){}

  public delete(id:any){
    this.shoeService.deleteShoe(id);
  }
}
