import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  // private courses?: any;

  constructor(
    private httpClient: HttpClient,

  ) { }

  getCourses() {
    this.getCoursesFromApi();
    // console.log(this.courses);
    // return this.courses;
  }

  getCoursesFromApi():Observable<any> {
    return this.httpClient.get('https://localhost:44308/api/courses')
  }
}
