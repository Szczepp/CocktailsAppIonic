import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { NgForOf } from '@angular/common';
import { CourseService } from '../_services/course.service';

@Component({
  selector: 'Courses',
  templateUrl: 'Courses.page.html',
  styleUrls: ['Courses.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, NgForOf]
})
export class Courses implements OnInit{

  public courses: any = [];

  constructor (
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.fetchData();
    console.log(this.courses);
  }

  async fetchData() {
    try {
      this.courses = await this.courseService.getCourses();
    } catch (error) {
      console.error(error);
    }
  }

 

}

