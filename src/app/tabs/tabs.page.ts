import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ProfileComponent } from '../Profile/profile.component';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonicModule, ProfileComponent],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {}
}
