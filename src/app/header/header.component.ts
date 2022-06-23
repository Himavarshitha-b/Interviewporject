import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { CandidateService } from '../candidate.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService:AuthenticationService,private adminservice:AdminService){ }
  

  ngOnInit() {
  }


}
