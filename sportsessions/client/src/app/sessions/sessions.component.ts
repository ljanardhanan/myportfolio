import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { Session } from '../service/session';
import { Student } from '../service/student';
import { SessionService } from '../service/session.service';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css'],
  providers: [SessionService]
})
export class SessionsComponent implements OnInit 
//AfterViewInit,
{
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
  
  displayedColumns = ['level', 'start_date', 'end_date', 'session_day', 'session_time', 'instructor', 'student'];
  //dataSource = new SessionDataSource(this._sessionService);
  dataSource : MatTableDataSource<Session>;
  public showAddForm:boolean = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _sessionService:SessionService
  ) {
    this._sessionService.getSessions()
    .subscribe( sessions =>
      {
        console.log(sessions);
        this.sessions = sessions;
        this.dataSource = new MatTableDataSource(sessions);
        console.log(this.dataSource);
      }, err => {
        console.log(err);
      });
  }

/*   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    /* this.paginator.page
        .pipe(
            tap(() => this._sessionService.getSessions())
        )
        .subscribe();
} */

  toggle(){
    this.showAddForm = !this.showAddForm;
  }

  deleteSession(id:any) {
    var sessions = this.sessions;
    alert(id);
    this._sessionService.deleteSession(id)
        .subscribe(data =>{
          if(data.n==1){
            for(var i = 0;i < sessions.length; i++) {
              if(sessions[i]._id == id) {
                sessions.splice(i, 1);
              }
            }
          }
          this.dataSource = new MatTableDataSource(sessions);
          //this.ngOnInit();
        }
      )
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
      this.sessions.push(newSession);
      this.showAddForm = !this.showAddForm;
      this.dataSource = new MatTableDataSource(this.sessions);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      //this.ngOnInit();
    }, err => {
      console.log(err);
    });
    
  }

  updateSession() {
    const newSession = {
      level: this.level,
      start_date: this.start_date,
      end_date: this.end_date,
      session_day: this.session_day,
      session_time: this.session_time,
      instructor: this.instructor,
      update_date: Date.now(),
      students: this.students
    }
    this._sessionService.addSession(newSession)
    .subscribe(session =>{
      this.sessions.push(session);
      this.dataSource = new MatTableDataSource(this.sessions);
    }, err => {
      console.log(err);
    });
  }

ngOnInit() {
    this._sessionService.getSessions()
        .subscribe( sessions =>
          {
            console.log(sessions);
            this.sessions = sessions;
            this.dataSource = new MatTableDataSource(this.sessions);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }, err => {
            console.log(err);
          });
    
    console.log(this.dataSource);
  }



}

export class SessionDataSource extends DataSource<any> {
  constructor(private _sessionService:SessionService) {
    super()
  }

  connect() {
    return this._sessionService.getSessions();
  }

  disconnect() {

  }
}