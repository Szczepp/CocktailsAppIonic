import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule], 
})
export class RegisterPage implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  registerForm!: FormGroup;

  loading = false;
  submitted = false;
  returnUrl?: string;
  error!: string;

  navigateToTab(tabName: string) {
    this.router.navigate(['/tabs', tabName]);
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() {
    return this.registerForm?.controls;
  }

  onSubmit(): void {
    console.log("clicked log in");
    this.submitted = true;

    if (this.registerForm?.invalid) {
      return;
    }
    this.loading = true;
    this.authService
      .register(
        this.f?.['username'].value,
         this.f?.['email'].value,
         this.f?.['password'].value,
         this.f?.['confirmPassword'].value)
      .pipe(first())
      .subscribe(
        (data) => {
          this.router.navigate([this.returnUrl]);
        },
        (error) => {
          this.error = error.error;
          this.loading = false;
        }
      );
  }
}
