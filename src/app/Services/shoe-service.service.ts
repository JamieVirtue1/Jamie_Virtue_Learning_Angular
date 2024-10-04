
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Shoe} from "../shared/models/user";
import {shoeArray} from "../../data/mock-content";


@Injectable({
  providedIn: 'root'
})
export class ShoeServiceService {
  private shoes: Shoe[] = shoeArray;
  constructor() { }

  getShoes(): Observable<Shoe[]>{
    return of(shoeArray);
  }

  addShoe(newShoe:Shoe) : Observable<Shoe[]>{
    this.shoes.push(newShoe)
    return of(this.shoes);
  }

  deleteShoe(shoeId: number): Observable<Shoe[]> {
    this.shoes = this.shoes.filter(shoeChoice => shoeChoice.id !== shoeId);
    return of(this.shoes);
  }

  updateShoes(updatedShoe: Shoe): Observable<Shoe[]> {
    const index = this.shoes.findIndex(shoeChoice => shoeChoice.id === updatedShoe.id);
    if (index !== -1) {
      this.shoes[index] = updatedShoe;
    }
    return of(this.shoes);
  }

  getShoeById(shoeId: number): Observable<Shoe | undefined> {
    const shoe = this.shoes.find(shoeChoice => shoeChoice.id === shoeId);
    return of(shoe);
  }
}
