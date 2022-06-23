import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  UpdateAdminService: any;
  updateAdmin: any;
  deleteAdmin: any;
  viewAll: any;
  viewall: any;
  

  
  
  constructor(private httpClient: HttpClient) {}

  // insert the candidate data
  public insertAdmin(formData: FormGroup){

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
    "designation":formData.get('designation').value,
    

     })
    
    this.httpClient.post('http://localhost:11084/addAdmin', body, { headers: headers }).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
    
  }
  //update the candidate data
  public updateadmin(formData){

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
    "designation":formData.get('designation').value,
  
     })
    
    this.httpClient.put('http://localhost:11084/updateadmin/', body, { headers: headers }).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });


      alert("Are you sure you want to update the Admin details!!")
    
  }

  public deleteadmin(formData) {
    const headers = new HttpHeaders({
      // 'Content-Type': 'application/x-www-form-urlencoded'
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    this.httpClient.delete('http://localhost:11084/deleteadmin/' + formData.get('userId').value, { headers: headers }).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
    }

    viewadmin:Object;
    public viewAdmin(formData:FormGroup){

      var viewAdmin : any={

        "userId":0,
        "name":"",
        "contactNo":"",
        "email":"",
        "address":"",
        "userName":"",
        "role":"",
       
        "designation":"",
        
      };
      
      const headers = new HttpHeaders({
      
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      });
    
      this.httpClient.get('http://localhost:11084/viewadmin/' +formData.get('userId').value, {headers:headers} ).subscribe(
        response => {

         viewAdmin=response
         
          console.log("userId"+viewAdmin.userId)
          console.log(response);
          
        },
        error => {
          console.log(error);
        });
       // return this.viewCandi;
       return viewAdmin
      
    }
}
 
   
     
  
function admin(formData: any) {
  throw new Error('Function not implemented.');
}

function formData(formData: any) {
  throw new Error('Function not implemented.');
}

