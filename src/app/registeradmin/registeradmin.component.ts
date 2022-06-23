import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { CandidateService } from '../candidate.service';

@Component({
  selector: 'app-registeradmin',
  templateUrl: './registeradmin.component.html',
  styleUrls: ['./registeradmin.component.css']
})
export class RegisterAdminComponent implements OnInit {

  message : string=""
  email = ''
  password = ''
  invalidLogin = false

  form = new FormGroup({
    
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    contactNo: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
    designation: new FormControl('', Validators.required),
  });
  

  constructor(private router: Router,private adminservice : AdminService) {

  }
  get f() {
    return this.form.controls;
  }

  submit() {
   this.adminservice.insertAdmin( this.form)

  }
  ngOnInit(): void {
   }

}
