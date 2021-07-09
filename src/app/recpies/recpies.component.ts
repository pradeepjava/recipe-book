import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recpies',
  templateUrl: './recpies.component.html',
  styleUrls: ['./recpies.component.css']

})
export class RecpiesComponent implements OnInit {
  recipeEmited:Recipe;
  constructor() { }

  ngOnInit(): void {
   
  }

}
