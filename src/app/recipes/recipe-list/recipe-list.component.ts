import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is simply a test',
      'https://www.averiecooks.com/wp-content/uploads/2021/01/garlicbutterchicken-5.jpg'
    ),
    new Recipe(
      'A test recipe',
      'This is simply a test',
      'https://www.averiecooks.com/wp-content/uploads/2021/01/garlicbutterchicken-5.jpg'
    ),
  ];

  constructor() {}
}
