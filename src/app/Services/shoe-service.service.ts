
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


  //Crud Operations

  //Add
  addShoe(newShoe:Shoe) : Observable<Shoe[]>{
    this.shoes.push(newShoe)
    return of(this.shoes);
  }

  //Update
  updateShoes(updatedShoe: Shoe): Observable<Shoe[]> {
    const index = this.shoes.findIndex(shoeChoice => shoeChoice.id === updatedShoe.id);
    if (index !== -1) {
      this.shoes[index] = updatedShoe;
    }
    return of(this.shoes);
  }

  //Delete
  deleteShoe(shoeId: number): void{
    this.shoes = this.shoes.filter(shoeChoice => shoeChoice.id !== shoeId);
    console.log(this.shoes);
  }

  //Retrieve
  getShoes(): Observable<Shoe[]>{
    return of(shoeArray);
  }

  getShoeById(shoeId: number): Observable<Shoe | undefined> {
    const shoe = this.shoes.find(shoeChoice => shoeChoice.id === shoeId);
    return of(shoe);
  }
}
