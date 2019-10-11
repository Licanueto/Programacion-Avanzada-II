import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})

export class StudentListComponent implements OnInit {
  private students;

  constructor(private studentService: StudentService, private route: ActivatedRoute) { 

   }
  
  ngOnInit() {
    this.studentService.getAll()
    .then((res) => this.students = res)
    .catch(() => console.log("error"))
    console.log(this.students)
  }  

}
