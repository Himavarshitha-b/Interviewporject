import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
//import { RegisterUserComponent } from './register-candidate/register-candidate.component';
import { CandidateService } from './candidate.service';
import { RegisterCandidateComponent } from './register-candidate/register-candidate.component';
import { UpdateCandidateComponent } from './update-candidate/update-candidate.component';
import { ViewCandidateComponent } from './view-candidate/view-candidate.component';
import { DeleteCandidateComponent } from './delete-candidate/delete-candidate.component';
import { RegisterAdminComponent } from './registeradmin/registeradmin.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { DeleteAdminComponent } from './delete-admin/delete-admin.component';
import { ViewAdminComponent } from './view-admin/view-admin.component';
import { AdminService } from './admin.service';
//import { ViewAllComponent } from './view-all/view-all.component';



@NgModule({
  declarations: [
    AppComponent,
    //EmployeeComponent,
    AddEmployeeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
   // RegisterUserComponent,
     RegisterCandidateComponent,
     UpdateCandidateComponent,
    ViewCandidateComponent,
    // DeleteCandidateComponent,
    RegisterAdminComponent,
  
    UpdateAdminComponent,
  
    DeleteAdminComponent,
  
    ViewAdminComponent,
  
    
//ViewAllComponent 
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
