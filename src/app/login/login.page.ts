import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
   private route: ActivatedRoute,
   private router: Router,
   private userService: UserService
   ) { 
     if (this.userService.currentUserValue) { 
       this.router.navigate(['/']);
     }
   }

   loginForm!: FormGroup;
   loading = false;
   submitted = false;
   returnUrl?: string;
   error!: string

 ngOnInit(): void {
   this.loginForm = this.formBuilder.group({
     username: ['', Validators.required],
     password: ['', Validators.required]
   });

   this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
 }
 get f() { return this.loginForm?.controls; }

 onSubmit(): void {
   this.submitted = true;

   if(this.loginForm?.invalid) {
     return ;
   }
   this.loading = true;
   this.userService.login(this.f?.['username'].value, this.f?.['password'].value)
   .pipe(first())
   .subscribe(
     data => {
       this.router.navigate([this.returnUrl]);
     },
     error => {
       this.error = error.error;
       this.loading = false;
     }
   )
 }

}
