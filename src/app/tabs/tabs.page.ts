import { Component, EnvironmentInjector, OnChanges, OnInit, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ProfileComponent } from '../Profile/profile.component';
import { CommonModule } from '@angular/common';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonicModule, ProfileComponent, CommonModule],
})
export class TabsPage implements OnChanges, OnInit  {
  public environmentInjector = inject(EnvironmentInjector);
  currentUser: boolean = false;
  test: any;

  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.currentUser.subscribe(user => (this.currentUser = user != null ? true : false));
  }

  ngOnChanges(): void {
    
  }

  
  
}
