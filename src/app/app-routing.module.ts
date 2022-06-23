import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';

import {RegisterCandidateComponent} from './register-candidate/register-candidate.component';
import { UpdateCandidateComponent } from './update-candidate/update-candidate.component';
import { ViewCandidateComponent } from './view-candidate/view-candidate.component';
import { DeleteCandidateComponent } from './delete-candidate/delete-candidate.component';
import { RegisterAdminComponent } from './registeradmin/registeradmin.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { DeleteAdminComponent } from './delete-admin/delete-admin.component';
import { ViewAdminComponent } from './view-admin/view-admin.component';


const routes: Routes = [
  //{ path: '', component: EmployeeComponent, canActivate: [AuthGaurdService] },
  { path: 'addemployee', component: AddEmployeeComponent, canActivate: [AuthGaurdService] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGaurdService] },
  //{ path: 'registeruser',component:RegisterUserComponent},
   { path:'registercandidate',component:RegisterCandidateComponent},
    { path:'updatecandidate',component:UpdateCandidateComponent},
    { path:'viewcandidate',component:ViewCandidateComponent},
  //  { path:'deletecandidate',component:DeleteCandidateComponent},
   { path:'registeradmin',component:RegisterAdminComponent},
   {path:'updateAdmin',component:UpdateAdminComponent},
   {path:'deleteadmin',component:DeleteAdminComponent},
  {path:'viewAdmin',component:ViewAdminComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
