import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service'
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  studentForm: FormGroup;
  student: Student = new Student();


  constructor(private studentService: StudentService, private route: ActivatedRoute) { }

  ngOnInit() {
   this.studentForm = new FormGroup({
      'firstName': new FormControl(this.student.firstName,[Validators.required]),
      'lastName': new FormControl(this.student.lastName,[Validators.required]),
      'email': new FormControl(this.student.email,[Validators.required]),
      'dni': new FormControl(this.student.dni,[Validators.required]),
      'address': new FormControl(this.student.address,[Validators.required])
    })
  }

  addStudent(){
    this.studentService.addStudent(this.student)
    .then(() => alert("ok"))
    .catch(() => console.log("error"))
  }

}
