import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionsComponent }  from './sessions/sessions.component';
import { StudentsComponent }  from './students/students.component';
import { SessionCreateComponent }  from './session-create/session-create.component';
import { StudentCreateComponent }  from './student-create/student-create.component';

const routes: Routes = [ 
    {
        path: 'sessions',
        component: SessionsComponent,
        data: { title: 'Sessions List' }
      },
      {
        path: 'students',
        component: StudentsComponent,
        data: { title: 'Students List' }
      },
      {
        path: 'session-create',
        component: SessionCreateComponent,
        data: { title: 'Create Session' }
      },
      /* {
        path: 'session-edit/:id',
        component: SessionEditComponent,
        data: { title: 'Edit Session' }
      }, */
      {
        path: 'student-create',
        component: StudentCreateComponent,
        data: { title: 'Create Student' }
      },
 ];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}