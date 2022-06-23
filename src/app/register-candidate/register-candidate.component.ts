import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidateService } from '../candidate.service';

@Component({
  selector: 'app-register-candidate',
  templateUrl: './register-candidate.component.html',
  styleUrls: ['./register-candidate.component.css']
})
export class RegisterCandidateComponent implements OnInit {

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
    
    primarySkils: new FormControl('', Validators.required),
    secondarySkils: new FormControl('', Validators.required),
    experience: new FormControl('', Validators.required),
    qualification: new FormControl('', Validators.required),
    designation: new FormControl('', Validators.required),
    noticePeriod: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),

    
    
    
  });
  

  constructor(private router: Router,private candidateservice : CandidateService) {

  }
  get f() {
    return this.form.controls;
  }

  submit() {
   this.candidateservice.insertCandidate( this.form)

  }
  ngOnInit(): void {
   }

}
