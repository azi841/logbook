import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './_guards/index';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ForgotPasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginService } from './services/login.service';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { ProfessorProfileComponent } from './professor-profile/professor-profile.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentListComponent } from './student-list/student-list.component';
import { ProfessorListComponent } from './professor-list/professor-list.component';
import { RegisterPatientComponent } from './register-patient/register-patient.component';
import { ProfessorDashboardComponent } from './professor-dashboard/professor-dashboard.component';
import { ListOfPatientComponent } from './list-of-patient/list-of-patient.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AdminDashboardComponent,
    ForgotPasswordComponent,
    TermsandconditionsComponent,
    ChangepasswordComponent,
    AdminProfileComponent,
    ProfessorProfileComponent,
    StudentProfileComponent,
    RegistrationComponent,
    StudentDashboardComponent,
    StudentListComponent,
    ProfessorListComponent,
    RegisterPatientComponent,
    ProfessorDashboardComponent,
    ListOfPatientComponent,
    AboutSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2OrderModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    Ng2SearchPipeModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ],
  providers: [
    AuthGuard,
    LoginService
  ],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
