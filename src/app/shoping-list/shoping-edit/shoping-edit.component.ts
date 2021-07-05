import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredents } from 'src/app/shared/ingredient.model';
import { ShopingListService } from '../shoping-list.service';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {
  @ViewChild("inName") ingredientName: ElementRef;
  @ViewChild("inAmount") ingredientAmount: ElementRef;
  constructor(private shopinglistService: ShopingListService) { }

  ngOnInit(): void {
  }

  onAdd() {
    const name = this.ingredientName.nativeElement.value;
    const amt = this.ingredientAmount.nativeElement.value;
    this.shopinglistService.addIngredents(new Ingredents(name, amt));
  }
}
