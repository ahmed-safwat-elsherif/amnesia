import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { Input } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { shareReplay, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private myClient: HttpClient) {
    console.log(myClient);
    console.log("ctor")
  }

  tokenpw

  /* local storage*/
  token = localStorage.getItem('token') || 'no token'

  /* url */
  private baseURL: string = "https://amnesia-skincare.herokuapp.com/api"

  //get profile
  getProfile() {
    console.log(this.token)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.token
      })
    };
    return this.myClient.get(`${this.baseURL}/users/profile`, httpOptions);
  }

  //post edit profile
  editUser(userinfoEditedJson) {
    console.log(userinfoEditedJson)
    console.log(typeof userinfoEditedJson)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.token
      })
    };
    return this.myClient.patch(`${this.baseURL}/users/`, userinfoEditedJson, httpOptions);
  }

  //patch resetpw
  crnPassword(userpwJson, tokencrpw) {
    console.log(userpwJson)
    console.log(tokencrpw)
    // console.log(this.token)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': tokencrpw
      })
    };
    return this.myClient.post(`${this.baseURL}/users/reset/password`, userpwJson, httpOptions);
  }

  //delete user id
  deleteUser() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.token
      })
    };
    return this.myClient.delete(`${this.baseURL}/users/`, httpOptions);
  }

  //forget password
  forgetPassword(email){
    console.log(email)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.token
      })
    };
    return this.myClient.post(`${this.baseURL}/users/forgetPassword`,email, httpOptions);
  }

}
