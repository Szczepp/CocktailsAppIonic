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
  }

  addCourse(newCourse: Course): void {
    this.httpClient.post('https://localhost:44308/api/courses', { newCourse });
  }

  getCoursesFromApi():Observable<any> {
    return this.httpClient.get('https://localhost:44308/api/courses')
  }
}

export interface Course {
  name: string;
  description: string;
  category: string;
  content: string;
}
