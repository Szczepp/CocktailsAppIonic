import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule], 
})
export class LoginPage implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  loginForm!: FormGroup;

  loading = false;
  submitted = false;
  returnUrl?: string;
  error!: string;

  navigateToTab(tabName: string) {
    this.router.navigate(['/tabs', tabName]);
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() {
    return this.loginForm?.controls;
  }

  onSubmit(): void {
    //console.log(this.f?.['username'].value);
    this.submitted = true;

    if (this.loginForm?.invalid) {
      return;
    }
    this.loading = true;
    this.authService
      .login(this.f?.['username'].value, this.f?.['password'].value)
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
