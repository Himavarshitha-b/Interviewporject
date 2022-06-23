import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidateService } from '../candidate.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './update-candidate.component.html',
  styleUrls: ['./update-candidate.component.css']
})
export class UpdateCandidateComponent implements OnInit {

  message : string=""
  email = ''
  password = ''
  invalidLogin = false

  
  candidateUpdateForm = new FormGroup({
    
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
  

  constructor(private router: Router,private candidateservice : CandidateService) {

  }
  
  get f() {
    return this.candidateUpdateForm.controls;
  }

  submit() {
    this.candidateservice.updateCandidate(this.candidateUpdateForm)
  }
  
  ngOnInit(): void {
    
  }

  

}
