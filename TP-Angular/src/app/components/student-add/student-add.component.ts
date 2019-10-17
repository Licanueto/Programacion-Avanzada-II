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


  constructor(private studentService: StudentService, private route: ActivatedRoute) { 
  }

  ngOnInit() {
   this.studentForm = new FormGroup({
      'firstName': new FormControl(this.student.firstName),
      'lastName': new FormControl(this.student.lastName),
      'email': new FormControl(this.student.email),
      'dni': new FormControl(this.student.dni),
      'address': new FormControl(this.student.address)
    })    
  }

  addStudent(){
    this.studentService.addStudent(this.studentForm.value)
    .then(() => alert("ok"))
    .catch(() => console.log("error"))
  }
}
