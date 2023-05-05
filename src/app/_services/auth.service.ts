import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private userService: UserService) { }

  login(username: string, password: string) {
    return this.userService.login(username, password);
  }
  register(username: string, email: string,  password: string, confirmPassword: string) {
    //return this.userService.register(username, password);
  }

  logout() {
    return this.userService.logout();
  }
}