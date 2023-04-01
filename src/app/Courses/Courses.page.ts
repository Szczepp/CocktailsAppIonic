import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'Courses',
  templateUrl: 'Courses.page.html',
  styleUrls: ['Courses.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent]
})
export class Courses {
  searchTerm: string = '';
  selectedItems: any[] = [];
  courses: string[] = ['Course 1', 'Course 2', 'Course 3', 'Course 4', 'Course 5'];

  get filteredCourses() {
    return this.courses.filter(course => course.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
}

