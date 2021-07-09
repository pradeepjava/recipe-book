import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredents } from 'src/app/shared/ingredient.model';
import { ShopingListService } from '../shoping-list.service';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {
  subscription: Subscription
  indexToBeEdited: number;
  ingredent: Ingredents;
  editMode = false;
  @ViewChild('f', { static: true }) ingredentForm: NgForm;
  constructor(private shopinglistService: ShopingListService) { }

  ngOnInit(): void {
    this.subscription = this.shopinglistService.itemIndexToBeEdited.subscribe(index => {
      this.indexToBeEdited = index;
      this.editMode = true;
      this.ingredent = this.shopinglistService.getIngredentsForEditByIndex(index);
      console.log(this.ingredent);
      console.log(this.indexToBeEdited)
      this.ingredentForm.setValue({
        'name': this.ingredent.name,
        'amount': this.ingredent.amount
      })
    })
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    if (this.editMode) {
      this.shopinglistService.updateIngredent(this.indexToBeEdited, new Ingredents(value.name, value.amount));
    }
    else {
      this.shopinglistService.addIngredents(new Ingredents(value.name, value.amount));
    }
    this.editMode = false;
    this.ingredentForm.reset();
  }
  onDelete() {
    this.editMode = false;
    this.ingredentForm.reset();
    this.shopinglistService.deleteIngredent(this.indexToBeEdited);
  }
  
  onClear() {
    this.editMode = false;
    this.ingredentForm.reset();
  }
}
