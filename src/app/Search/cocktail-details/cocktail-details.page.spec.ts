import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { CocktailDetailsPage } from './cocktail-details.page';

describe('CocktailDetailsPage', () => {
  let component: CocktailDetailsPage;
  let fixture: ComponentFixture<CocktailDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CocktailDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
