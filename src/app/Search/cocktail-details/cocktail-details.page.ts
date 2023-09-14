import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.page.html',
  styleUrls: ['./cocktail-details.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CocktailDetailsPage implements OnInit {

  constructor() { }
//need to do this whole cocktailRecipe from external API thing
  ngOnInit() {
  }

}
