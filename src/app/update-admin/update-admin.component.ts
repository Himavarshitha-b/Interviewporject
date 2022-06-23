import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { CandidateService } from '../candidate.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {
  [x: string]: any;

  message : string=""
  email = ''
  password = ''
  invalidLogin = false

  
  adminUpdateForm = new FormGroup({
    
    userId:new FormControl('', Validators.required),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    contactNo: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
    
    primarySkils: new FormControl('', Validators.required),
    secondarySkils: new FormControl('', Validators.required),
    experience: new FormControl('', Validators.required),
    qualification: new FormControl('', Validators.required),
    designation: new FormControl('', Validators.required),
    noticePeriod: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),

    
    
    
  });
  

  constructor(private router: Router,private adminservice : AdminService) {

  }
  
  get f() {
    return this.adminUpdateForm.controls;
  }

  submit() {
    this.adminservice.updateadmin(this.adminUpdateForm)
  }
  
  ngOnInit(): void {
    
  }

  

}
