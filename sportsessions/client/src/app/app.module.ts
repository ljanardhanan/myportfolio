import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule ,
  MatExpansionModule
  } from "@angular/material";
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SessionsComponent } from './sessions/sessions.component';
import { SessionCreateComponent } from './session-create/session-create.component';
import { StudentsComponent } from './students/students.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { SessionEditComponent } from './session-edit/session-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    SessionsComponent,
    SessionCreateComponent,
    StudentsComponent,
    StudentCreateComponent,
    SessionEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatExpansionModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
