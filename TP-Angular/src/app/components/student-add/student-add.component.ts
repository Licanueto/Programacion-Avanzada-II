import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  name: String;
  lastName: String;
  dni: String;
  email: String;
  adress: String;

  constructor(private studentService: StudentService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  addStudent(){
    let student = new Student();
    student.address = this.adress;
    student.dni = this.dni;
    student.email = this.email;
    student.firstName = this.name;
    student.lastName = this.lastName;
    console.log("hola")
    this.studentService.addStudent(student)
    .then(() => alert("ok"))
    .catch(() => console.log("error"))
  }

}
