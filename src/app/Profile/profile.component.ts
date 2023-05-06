import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]

})
export class ProfileComponent  implements OnInit {

  constructor(
    private authService: AuthService
  ) { }
  currentUser: any = localStorage.getItem('currentUser');
  ngOnInit() {
    this.currentUser = JSON.parse(this.currentUser);

  }

  logout() {
    this.authService.logout();
  }
  
}
