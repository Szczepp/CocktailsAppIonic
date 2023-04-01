import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'Search',
  templateUrl: 'Search.page.html',
  styleUrls: ['Search.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent]
})
export class Search {

  constructor() {}

}
