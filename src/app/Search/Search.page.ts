import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ProfileComponent } from '../Profile/profile.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SearchService } from '../_services/search.service';
import { first } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'Search',
  templateUrl: 'Search.page.html',
  styleUrls: ['Search.page.scss'],
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule, ProfileComponent, CommonModule]
})
export class Search implements OnInit{

  constructor(
    private formBuilder: FormBuilder,
    private searchService: SearchService
  ) {}

    searchForm!: FormGroup;
    loading = false;
    submitted = false;
    error!: string;
    cocktails: any = [];

    get f() {
      return this.searchForm?.controls;
    }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      cocktail: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.submitted = true;
    this.loading = true;

    if (this.searchForm?.invalid) {
      return;
    }
    this.searchService.search(this.f?.['cocktail'].value)
    .pipe(first())
    .subscribe(
      (data) => {
        this.cocktails = data.drinks;
        console.log(this.cocktails);
      },
      (error) => {
        this.error = error.error;
        this.loading = false;
      }
    );

  }
}
