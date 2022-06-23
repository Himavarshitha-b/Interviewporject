import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidateService } from '../candidate.service';



import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AdminService } from '../admin.service';



@Component({
selector: 'app-view-admin',
templateUrl: './view-admin.component.html',
styleUrls: ['./view-admin.component.css']
})
export class ViewAdminComponent implements OnInit {
viewAdmin:any={
"userId":"",
"name":"",
"contactNo":"",
"email":"",
"address":"",
"userName":"",
"role":"",
"designation":"",
};

viewAdminForm = new FormGroup({ userId:new FormControl("",Validators.required)});
constructor(private router: Router,private adminservice : AdminService ,private httpClient: HttpClient) {
}
get f() {
return this.viewAdminForm.controls;
}
submit() {
//this.candidateservice.searchCandidate(this.viewCandidateForm)
//this.viewCandi=this.candidateservice.viewCandidate(this.viewCandidateForm)
const headers = new HttpHeaders({

'Content-Type': 'application/json',
'Cache-Control': 'no-cache'
});

/* if (this.viewCandidateForm.get('userId').value ==0 || this.viewCandidateForm.get('userId').value =="" ){
this.viewCandi= {



"userId":"",
"name":"",
"contactNo":"",
"email":"",
"address":"",
"userName":"",
"role":"",
"primarySkils":"",
"secondarySkils":"",
"experience":"",
"qualification":"",
"designation":"",
"noticePeriod":"",
"location":"",
"status":""
}

}
else
{} */



this.httpClient.get('http://localhost:11084/viewadmin/' +this.viewAdminForm.get('userId').value, {headers:headers} ).subscribe(
response => {

this.viewAdmin=response

console.log("userId"+this.viewAdmin.userId)
console.log(response);




},
error => {
this.viewAdmin=null;
console.log(error);
});

}





ngOnInit() {
}




}