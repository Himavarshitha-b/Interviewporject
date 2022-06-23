import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
//import { CandidateService } from '../candidate.service';

@Component({
  selector: 'app-delete-admin',
  templateUrl: './delete-admin.component.html',
  styleUrls: ['./delete-admin.component.css']
})
export class DeleteAdminComponent implements OnInit {

  adminDeleteForm = new FormGroup({
    
    userId:new FormControl('', Validators.required)
  });

  constructor(private router: Router,private adminservice : AdminService) {

  }
  
  get f() {
    return this.adminDeleteForm.controls;
  }

  submit() {
    this.adminservice.deleteadmin(this.adminDeleteForm)
  }
  
  ngOnInit() {
  }

}
