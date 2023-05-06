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

  public courses: any;
  public JSON: any;

  constructor (
    private courseService: CourseService
  ) {
    this.JSON = JSON;
  }

  ngOnInit(): void {
    this.fetchData();
    console.log(this.courses);
  }

   fetchData() {
    try {
      this.courseService.getCoursesFromApi().subscribe((data) => {
        this.courses = data['$values'];
        console.log(this.courses);
        // console.log(data);
        //console.log(this.courses);
      });;
    } catch (error) {
      console.error(error);
    }
  }

 

}

