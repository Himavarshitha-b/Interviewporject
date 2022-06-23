import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  
  deleteCandidate(candidateViewForm: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient: HttpClient) {}

  // insert the candidate data
  public insertCandidate(formData){

    const headers = new HttpHeaders({
      // 'Content-Type': 'application/x-www-form-urlencoded'
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });

    var body = JSON.stringify({

    "name": formData.get('name').value, 
    "contactNo": formData.get('contactNo').value,
    "address": formData.get('address').value,
    "userName": formData.get('userName').value,
    "password": formData.get('password').value,
    "email": formData.get('email').value,
    "role":formData.get('role').value,

    "primarySkils":formData.get('primarySkils').value,
    "secondarySkils":formData.get('secondarySkils').value,
    "experience":formData.get('experience').value,
    "qualification":formData.get('qualification').value,
    "designation":formData.get('designation').value,
    "noticePeriod":formData.get('noticePeriod').value,
    "location":formData.get('location').value,
    "status":formData.get('status').value

     })
    
    this.httpClient.post('http://localhost:11084/addCandidate', body, { headers: headers }).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
    
  }

 
  //update the candidate data
  public updateCandidate(formData){

    const headers = new HttpHeaders({
      // 'Content-Type': 'application/x-www-form-urlencoded'
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });

    var body = JSON.stringify({
    "userId": formData.get('userId').value, 
    "name": formData.get('name').value, 
    "contactNo": formData.get('contactNo').value,
    "address": formData.get('address').value,
    "userName": formData.get('userName').value,
    "password": formData.get('password').value,
    "email": formData.get('email').value,
    "role":formData.get('role').value,

    "primarySkils":formData.get('primarySkils').value,
    "secondarySkils":formData.get('secondarySkils').value,
    "experience":formData.get('experience').value,
    "qualification":formData.get('qualification').value,
    "designation":formData.get('designation').value,
    "noticePeriod":formData.get('noticePeriod').value,
    "location":formData.get('location').value,
    "status":formData.get('status').value

     })
    
    this.httpClient.put('http://localhost:11084/updateCandidate', body, { headers: headers }).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });


      alert("Are you sure you want to update the candidate details!!")
    
  }



  public viewCandidate(formData){

    const headers = new HttpHeaders({
      // 'Content-Type': 'application/x-www-form-urlencoded'
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });

   /* var body = JSON.stringify({
    "userId": formData.get('userId').value, 
   

     })
     */
    
    this.httpClient.get('http://localhost:11084/viewCandidate'+ formData.get('userId').value, { headers: headers }).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
    
  }
  

  public deleteCandidate1(formData) {
    const headers = new HttpHeaders({
      // 'Content-Type': 'application/x-www-form-urlencoded'
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    this.httpClient.delete('http://localhost:11084/deleteCandidate/' + formData.get('userId').value, { headers: headers }).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
    }










  








}
