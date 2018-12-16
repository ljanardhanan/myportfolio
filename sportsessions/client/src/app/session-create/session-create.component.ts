import { Component, OnInit } from '@angular/core';
import { Session } from '../service/session';
import { Student } from '../service/student';
import { SessionService } from '../service/session.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-session-create',
  templateUrl: './session-create.component.html',
  styleUrls: ['./session-create.component.css'],
  providers: [SessionService]
})
export class SessionCreateComponent implements OnInit {
    sessions: Session[];
    //sessions: any;
    session: Session;
    _id?: string;
    level: String;
    start_date: Date;
    end_date: Date;
    session_day: String;
    session_time: String;
    instructor: String;
    create_date: Date;
    update_date: Date;
    students: Student[]; 
    student: Student;
  
  constructor(private router: Router, private _sessionService:SessionService) { }

  ngOnInit() {
  }

  addSession() {
    const newSession = {
      level: this.level,
      start_date: this.start_date,
      end_date: this.end_date,
      session_day: this.session_day,
      session_time: this.session_time,
      instructor: this.instructor,
      create_date: Date.now(),
      update_date: Date.now(),
      students: this.students
    
    }
    this._sessionService.addSession(newSession)
    .subscribe(session =>{
      this.router.navigate(['/sessions']);
/*       this.sessions.push(newSession);
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
