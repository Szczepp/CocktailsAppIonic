import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../_services/course.service';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.page.html',
  styleUrls: ['./add-course.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, ReactiveFormsModule]
})
export class AddCoursePage implements OnInit {

  courseForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService
  ) { }

  get f() {
    return this.courseForm?.controls;
  }

  ngOnInit(): void {
    this.courseForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSubmit() {
    //this.courseService.addCourse(this.getCourseFromInput())
    console.log(this.getCourseFromInput());

  }


  getCourseFromInput(): Course { 
    console.log(this.f?.['name'].value);
    return {
        name: this.f?.['name'].value,
        description: this.f?.['description'].value,
        category: this.f?.['category'].value,
        content: this.f?.['content'].value,
      };
    }

}
