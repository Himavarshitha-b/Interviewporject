import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class User {
  constructor(
    public status: string,
  ) { }

}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  authenticate(userName, password) {
    
    //    const body = new HttpParams()
    //      .set('email', email)
    //      .set('password', password)
    var body = JSON.stringify({ "userName":userName, "password": password })
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post('http://localhost:11084/user/loginUser', body, { headers: headers, responseType: 'text' }).pipe(
      map(
        userData => {
          sessionStorage.setItem('userName', userName);
          sessionStorage.setItem('password', password);
          sessionStorage.setItem('token', 'Bearer ' + userData);
          console.log(userName)
          console.log(userData)
          return userData;
        }
      )

    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('userName')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('userName')
    sessionStorage.removeItem('password')
    sessionStorage.removeItem('token')
  }
}