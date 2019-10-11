import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
 
  private baseUrl = "https://utn2019-avanzada2-tp8.herokuapp.com/"

  constructor(private http: HttpClient) { }

  getAll(): Promise<Object>{
    return this.http.get(this.baseUrl + 'api/students').toPromise()
  }

  getStudentById(id): Promise<Object> {
    return this.http.get(this.baseUrl + `api/students/${id}`).toPromise();
  }

  addStudent(student: Student): Promise<Object>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
    return this.http.post<Student>(this.baseUrl + `api/students`,student,httpOptions)
    .toPromise();
  }
}


