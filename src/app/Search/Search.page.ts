import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ProfileComponent } from '../Profile/profile.component';

@Component({
  selector: 'Search',
  templateUrl: 'Search.page.html',
  styleUrls: ['Search.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, ProfileComponent]
})
export class Search {

  constructor() {}
}
