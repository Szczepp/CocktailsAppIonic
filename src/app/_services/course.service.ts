import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(
    private httpClient: HttpClient,

  ) { }

  getCourses(): Promise<any> {
    return this.httpClient.get<any[]>('https://localhost:44308/api/courses').toPromise();
  }
}
