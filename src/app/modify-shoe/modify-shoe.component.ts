import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Shoe} from "../shared/models/user";

@Component({
  selector: 'app-modify-shoe',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './modify-shoe.component.html',
  styleUrl: './modify-shoe.component.css'
})
export class ModifyShoeComponent implements OnInit{
  shoeForm: FormGroup;
  shoe: Shoe | undefined;

  constructor(
    private fb: FormBuilder)
  {
    this.shoeForm = this.fb.group({
    })
  }

  ngOnInit(): void {
  }

  navigateToShoeList() {

  }

  onDelete() {

  }

  onSubmit() {

  }
}

