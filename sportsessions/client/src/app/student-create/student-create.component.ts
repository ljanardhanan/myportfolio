import { Component, OnInit } from '@angular/core';
import { Student } from '../service/student';
import { StudentService } from '../service/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css'],
  providers: [StudentService]
})
export class StudentCreateComponent implements OnInit {
  students: Student[];
  //sessions: any;
  student: Student;
  _id?: string;
  student_name: string;
  parent_name: string;
  level: String;
  start_date: Date;
  phone: String;
  address: String;
  sessions_remaining: String;
  create_date: Date;
  update_date: Date;
  
  constructor(private router: Router, private _studentService:StudentService) { }

  ngOnInit() {
  }

  addStudent() {
    const newStudent = {
      student_name: this.student_name,
      parent_name: this.parent_name,
      level: this.level,
      start_date: this.start_date,
      phone: this.phone,
      address: this.address,
      sessions_remaining: this.sessions_remaining,
      create_date: Date.now(),
      update_date: Date.now()
    }

    this._studentService.addStudent(newStudent)
    .subscribe(student =>{
      this.router.navigate(['/sessions']);
/*    this.sessions.push(newSession);
      this.showAddForm = !this.showAddForm;
      this.dataSource = new MatTableDataSource(this.sessions);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort; */
      //this.ngOnInit();
    }, err => {
      console.log(err);
    });
    
  }

}
