import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {

  private student;

  constructor(private studentService: StudentService, private route: ActivatedRoute) { 
  }

  ngOnInit() {
     this.studentService.getStudentById(this.route.snapshot.paramMap.get("id"))
     .then((res)=> this.student = res)
     .catch(()=> console.log("error"))
  }

}
