import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  private user? : any = localStorage.getItem('currentUser');
  private token! : string;

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { 
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(this.user));
    this.currentUser = this.currentUserSubject.asObservable();
  }

    public get currentUserValue() {
      return this.currentUserSubject.value;
    }
    public get currentUserToken() {
      return this.token;
    }
  

  login(username: string, password: string) {
    return this.httpClient.post<any>(`https://localhost:44308/api/authentication/login`, { username, password })
        .pipe(map(user => {
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            this.token = user.token;
            localStorage.setItem('currentUserToken', user.token);
            return user;
        }));
  }

  register(username: string, email: string,  password: string, confirmPassword: string) {
    return this.httpClient.post<any>(`https://localhost:44308/api/authentication/register`, { username, email,  password, confirmPassword})
        .pipe(map(user => {
          this.router.navigate(['/']);
        }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentUserToken');
    this.currentUserSubject.next(null);
    this.router.navigate(['/']);
  }
}
