import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidateService } from '../candidate.service';

@Component({
  selector: 'app-delete-candidate',
  templateUrl: './delete-candidate.component.html',
  styleUrls: ['./delete-candidate.component.css']
})
export class DeleteCandidateComponent implements OnInit {

  candidateDeleteForm = new FormGroup({
    
    userId:new FormControl('', Validators.required)
  });

  constructor(private router: Router,private candidateservice : CandidateService) {

  }
  
  get f() {
    return this.candidateDeleteForm.controls;
  }

  submit() {
    this.candidateservice.deleteCandidate1(this.candidateDeleteForm)
  }
  
  ngOnInit() {
  }

}
