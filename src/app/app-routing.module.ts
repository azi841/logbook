import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { ForgotPasswordComponent } from './forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { TermsandconditionsComponent} from './termsandconditions/termsandconditions.component';
import { AuthGuard } from './_guards/auth.guard';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { ProfessorProfileComponent } from './professor-profile/professor-profile.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegisterPatientComponent } from './register-patient/register-patient.component';
import { StudentListComponent } from './student-list/student-list.component';
import { ProfessorListComponent } from './professor-list/professor-list.component';
import { ProfessorDashboardComponent } from './professor-dashboard/professor-dashboard.component';
import { ListOfPatientComponent } from './list-of-patient/list-of-patient.component';
import { AboutSectionComponent } from './about-section/about-section.component';


const routes: Routes = [
  { path: "", redirectTo: "homepage", pathMatch: "full" },
  { path: 'homepage', component:HomepageComponent},
  { path: 'admin-dashboard', component:AdminDashboardComponent, canActivate: [AuthGuard]},
  { path: 'student-dashboard', component:StudentDashboardComponent, canActivate: [AuthGuard]},
  { path: 'forgotpassword', component:ForgotPasswordComponent},
  { path: 'changepassword/:token', component:ChangepasswordComponent},
  { path: 'admin-profile', component:AdminProfileComponent, canActivate: [AuthGuard]},
  { path: 'professor-profile', component:ProfessorProfileComponent, canActivate: [AuthGuard]},
  { path: 'student-profile', component:StudentProfileComponent, canActivate: [AuthGuard]},
  { path: 'termsandconditions', component:TermsandconditionsComponent, canActivate: [AuthGuard]},
  { path: 'registration', component:RegistrationComponent, canActivate: [AuthGuard]},
  { path: 'register-patient', component:RegisterPatientComponent, canActivate: [AuthGuard]},
  { path: 'student-list', component:StudentListComponent, canActivate: [AuthGuard]},
  { path: 'professor-list', component:ProfessorListComponent, canActivate: [AuthGuard]},
  { path: 'professor-dashboard', component:ProfessorDashboardComponent, canActivate: [AuthGuard]},
  { path: 'list-of-patient', component:ListOfPatientComponent, canActivate: [AuthGuard]},
  { path: 'about-section', component:AboutSectionComponent, canActivate: [AuthGuard]},
];
export const appRoutingModule = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy'})],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class AppRoutingModule { }

