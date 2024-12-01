import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Shoe} from "../shared/models/user";
import {ActivatedRoute, Router} from "@angular/router";
import {ShoeServiceService} from "../Services/shoe-service.service";
import {FocusHighlightDirective} from "../Directives/focus-highlight.directive";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
@Component({
  selector: 'app-modify-shoe',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FocusHighlightDirective,
    MatCardModule,
    MatInputModule
  ],
  templateUrl: './modify-shoe.component.html',
  styleUrl: './modify-shoe.component.css'
})
export class ModifyShoeComponent implements OnInit{
  shoeForm: FormGroup;
  shoeData: Shoe | undefined;

  id: Number | undefined;

  constructor(private router: Router, private shoeService:ShoeServiceService, private route:ActivatedRoute, private fb: FormBuilder) {this.shoeForm = this.fb.group({})
    this.shoeForm = this.fb.group({
      colour: [''],
      size: [''],
      brand: [''],
      price: [''],
      isUsed: [''],
      id: ['']
    });
  }

  ngOnInit(): void {

    const idURL = this.route.snapshot.paramMap.get('id');
    if(idURL != null){
      const idNum = parseInt(idURL);
      this.id = idNum;

      const shoe = this.shoeService.getShoeById(idNum);
      this.shoeService.getShoeById(idNum).subscribe(shoe => {
        if(shoe){
          this.shoeData = shoe;
          this.shoeForm.patchValue(shoe);
        }

      });
    }else{
      this.router.navigate(['modify-shoe']);
    }
  }

  navigateToShoeList() {
    this.router.navigate(['shoe']);
  }

  onSubmit() {
    const shoe: Shoe = this.shoeForm.value;

    if (this.id) {
      this.shoeService.updateShoes(shoe);
    }else{
      const newId = this.shoeService.generateNewId(); // This method will create a new ID
      shoe.id = newId;
      this.shoeService.addShoe(shoe);
    }
    this.router.navigate(['shoe']);
  }

  public delete(id:any){
    this.shoeService.deleteShoe(id);
    this.router.navigate(['shoe']);
  }
}

