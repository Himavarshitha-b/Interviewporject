import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidateService } from '../candidate.service';

@Component({
  selector: 'app-view-candidate',
  templateUrl: './view-candidate.component.html',
  styleUrls: ['./view-candidate.component.css']
})
export class ViewCandidateComponent implements OnInit {
  //candidateViewForm: any;
  

  candidateViewForm = new FormGroup({
    
    userId:new FormControl('', Validators.required)
  });

  constructor(private router: Router,private candidateservice : CandidateService) {

  }
  
  get f() {
    return this.candidateViewForm.controls;
  }

  submit() {
    this.candidateservice.viewCandidate(this.candidateViewForm)
  }
  
  ngOnInit() {
  }

}
